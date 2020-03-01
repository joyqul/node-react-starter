import axios from 'axios';

export default {
  getAll: async () => {
    let res = await axios.get(`/api/product`);
    return res.data || [];
  },
  addNew: async (payload) => {
    let res = await axios.post(`/api/product`, payload);
    return res.data || [];
  }
}
