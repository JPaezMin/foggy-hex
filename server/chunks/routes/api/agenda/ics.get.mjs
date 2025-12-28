import { c as defineEventHandler, e as createError, f as setHeader } from '../../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:path';
import 'better-sqlite3';
import 'ipx';

const CALENDAR_ID = "c_1b9e4111ecdffe96f6d9e657a6b061386b05f3e5fc93de1f9a482e5a7b1cb485@group.calendar.google.com";
const ics_get = defineEventHandler(async (event) => {
  const url = `https://www.google.com/calendar/ical/${CALENDAR_ID}/public/full.ics`;
  const response = await fetch(url);
  if (!response.ok) {
    throw createError({
      statusCode: 502,
      statusMessage: "No se pudo obtener la agenda desde Google Calendar."
    });
  }
  const text = await response.text();
  setHeader(event, "Content-Type", "text/calendar; charset=utf-8");
  setHeader(event, "Cache-Control", "s-maxage=600, stale-while-revalidate=600");
  return text;
});

export { ics_get as default };
//# sourceMappingURL=ics.get.mjs.map
