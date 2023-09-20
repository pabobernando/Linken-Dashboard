import { create } from 'zustand'

export const useChartBalance = create((set) => ({
    labels: [],
    data: [],
    setDataChart: (balances) => {
        const labels = balances.map(b => b.denom)
        const values = balances.map(b => b.amount)
        set({ data: values, labels: labels })
    }
}))