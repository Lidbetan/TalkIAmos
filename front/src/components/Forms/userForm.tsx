"use client";

import { IresponseGPT } from "@/interfaces/gpt.interface";
import { Button, Select, SelectItem, Textarea } from "@nextui-org/react";
import { useState } from "react";
import ResponseGPT from "@/components/responseGPT";
import { defaultLang } from "@/configs/defaultLang";
import { useHistoryStore } from "@/stores/historyStore";
import Link from "next/link";
import { IBackendResponse } from "@/interfaces/backendResponseText.interface";

export default function UserForm() {
	let loading = false;
	//Se actualiza desde onValueChange
	const [message, setMessage] = useState("");
	//Se actualiza con handleSelectionChange, es el lenguaje de salida.
	const [langValue, setLangValue] = useState("en");
	const [responseGPT, setResponseGPT] = useState<IBackendResponse | null>(null);
	//listenLoading determina si se renderiza el boton con spiner o no.
	const [listenLoading, setListenLoading] = useState(false);
	//Me traigo el historial de zustand
	const history = useHistoryStore((state) => state.history);
	const updateHistory = useHistoryStore((state) => state.updateHistory);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		loading = true;
		setListenLoading(loading);
		// console.log("loading previo a try", loading);
		try {
			if (message.trim() !== "" && langValue.trim() !== "") {
				//Crea una variable temporal para que almacene mensaje e idioma de la petición del usuario
				const tempUserMessage = {
					langCode: langValue,
					message: message,
					rol: "user",
				};
				const response = await fetch("/api/translate", {
					method: "POST",
					body: JSON.stringify({
						message: message,
						to: langValue,
					}),
				});
				// console.log(response)
				const parseRes: IBackendResponse = await response.json();
				// console.log(parseRes);
				setResponseGPT(parseRes);
				//Actualiza el store con la solicitud del usuario
				updateHistory({
					langCode: parseRes.from,
					message: tempUserMessage.message,
					rol: "user",
				});
				//Actualiza el store con la respuesta de la API.
				updateHistory({
					langCode: tempUserMessage.langCode,
					message: parseRes.translated,
					rol: "ia",
				});
				loading = false;
				setListenLoading(loading);
			} else {
				alert("Por favor complete todos los campos...");
			}
		} catch (error) {
			console.log({ error });
		}
	};
	console.log("Log de history en userForm", history);

	return (
		<>
			<div className="form-wrapper w-full mt-4">
				<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
					<Textarea
						label="Introduce el texto a traducir aquí..."
						color="primary"
						radius="lg"
						variant="faded"
						onValueChange={setMessage}
					/>
					<Select
						className=""
						color="primary"
						radius="lg"
						variant="faded"
						label="Idioma de salida"
						onChange={(e) => setLangValue(e.target.value)}
					>
						{defaultLang.map((lang) => (
							<SelectItem key={lang.to} value={lang.to}>
								{lang.name}
							</SelectItem>
						))}
					</Select>
					{/* Renderiza condicionalmente los botones con el spinner en función de listenLoading*/}
					{listenLoading ? (
						<Button
							children="Traducir"
							type="submit"
							color="secondary"
							isLoading={true}
						/>
					) : (
						<Button
							children="Traducir"
							type="submit"
							color="secondary"
							isLoading={false}
						/>
					)}
				</form>
				{responseGPT && <ResponseGPT response={responseGPT} />}
				<Button>
					<Link href="/history">To history</Link>
				</Button>
			</div>
		</>
	);
}
