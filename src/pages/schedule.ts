// src/pages/schedule.ts

import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ redirect }) => {
  return redirect('/#schedule', 302);
};