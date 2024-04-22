"use client";

import { IGroupedMessage } from "@/interfaces/message.interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface HistoryZustand {
	history: IGroupedMessage[];
	updateHistory: (response: IGroupedMessage) => void;
	updateAudio: (response: IGroupedMessage, audioUrl: string) => void;
	cleanHistory: () => void;
	cleanOneMessage: (id: string) => void;
}

export const useHistoryStore = create(
	persist<HistoryZustand>(
		(set, get) => ({
			history: [],
			updateHistory: (response) => {
				const { history } = get()
				set({ history: [...history, response] })
			},
			updateAudio: (response, audioUrl) => {
				const { history } = get()
				set({
					history: history.map((message) =>
						message.id === response.id
							? { ...message, audioUrl: audioUrl }
							: message
					)
				})
			},
			cleanHistory: () => set({ history: [] }),
			cleanOneMessage: (id) => {
				const { history } = get()
				const filteredHistory = history.filter((message) => message.id !== id)
				set({history: filteredHistory})
			}

		}),
		{ name: "history" }
	)
);
