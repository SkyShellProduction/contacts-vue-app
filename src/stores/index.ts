import { defineStore } from 'pinia'
import {type ContactsType, filterEnum} from '@/types/contacts';
const contactData = localStorage.contacts ? JSON.parse(localStorage.contacts) : null;
export const useMainStore = defineStore('main', {
    state: () => {
      return {
        contacts: contactData as ContactsType[] | null,
        searchFilter: filterEnum.name,
        search: '',
        curContact: '',
        formData: {
          name: '',
          email: '',
          id: '',
          phone: '',
          tags: ''
        } as ContactsType
      }
    },
    actions: {
      setSearch(val: string) {
        this.search = val;
      },
      setSearchFilter(val: filterEnum){
        this.searchFilter = val;
      },
      setCurContact(id: string) {
        this.curContact = id;
      },
      setFormData(obj: ContactsType | null){
        this.formData.name = obj?.name || '';
        this.formData.email = obj?.email || '';
        this.formData.tags = obj?.tags || '';
        this.formData.phone = obj?.phone || '';
        this.formData.id = obj?.id || '';
      },
      addOrEditContact(obj: ContactsType){
        const data = {...obj, id: Date.now().toString()};
        if(obj.id) {
          const idx = this.contacts?.findIndex(c => c.id === obj.id);
          if(idx !== -1 && idx !== undefined && this.contacts) {
            this.contacts[idx] = obj;
          }
        }
        else {
          if(!this.contacts) {
            this.contacts = [data];
          }
          else this.contacts.push(data);            
        }
      },
      deleteContact(id: string){
          const idx = this.contacts?.findIndex(c => c.id === id);
          if(idx !== -1) this.contacts?.splice(Number(idx), 1);
      } 
    },
    getters: {
      getOneContact: state => (id: string) => {
          const idx = state.contacts?.find(c => c.id === id);
          return idx;
      },
      getContacts: state => {
        if(!state.search) return state.contacts;
        return state.contacts?.filter((c) => {
          if(c[state.searchFilter as filterEnum].toLowerCase().includes(state.search.toLowerCase())) return c;
        })
      }
    }
})
