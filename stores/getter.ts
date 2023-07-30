import { defineStore } from 'pinia'
import axios from 'axios'

const apiUrl = 'http://localhost:3000/users';


export const getUsers = defineStore('userData', {
    state: () => ({
      users: []
    }),
    actions: {
        async fetchUsers() {
          try {
            const response = await axios.get(apiUrl);
            this.users = response.data
          } catch (error) {
            console.error('Chyba při získávání dat:', error);
          }
        },
    },
    getters: {
      getUsersData(state) {
          return state.users
      }
  },
  })
  