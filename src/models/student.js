// src/models/student.js

import { text } from 'express';
import { Schema, model } from 'mongoose';

const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ['male', 'female', 'other'],
    },
    avgMark: {
      type: Number,
      required: true,
    },
    onDuty: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

studentSchema.index(
  { name: 'text' },
  {
    name: 'StudentTextIndex',
    weights: { name: 10 },
    default_language: 'english',
  },
);

export const Student = model('Student', studentSchema);
