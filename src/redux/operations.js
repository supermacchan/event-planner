import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const instance = axios.create({
    baseURL: 'https://64cdf5230c01d81da3ee634e.mockapi.io/',
});

const fetchAllEvents = createAsyncThunk(
    'events/fetchAll',
    async (_, thunkAPI) => {
      try {
        const { data } = await instance.get("/events");
        return data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
);

const fetchEventDetails = createAsyncThunk(
    'events/fetchEventDetails',
    async (id, thunkAPI) => {
      try {
        const { data } = await instance.get(`/events/${id}`); 
        return data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
);

const createEvent = createAsyncThunk(
  'events/addNewEvent',
  async (newEvent, thunkAPI) => {
    try {
      const { data } = await instance.post("/events", newEvent);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const deleteEvent = createAsyncThunk(
  'events/deleteEvent',
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/events/${id}`); 
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const updateEvent = createAsyncThunk(
  'events/updateEvent',
  async ({id, newEvent}, thunkAPI) => {
    try {
      const { data } = await instance.put(`/events/${id}`, newEvent); 
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const operations = {
    fetchAllEvents,
    fetchEventDetails,
    createEvent,
    deleteEvent,
    updateEvent
} 