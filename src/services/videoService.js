import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://itdgxvribmwmlocgbyul.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0ZGd4dnJpYm13bWxvY2dieXVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg4ODM3OTIsImV4cCI6MTk4NDQ1OTc5Mn0.ilKvaXHRWwrWuIWLUObmPmTDZdNwExA0_IgrQCRBcVc";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from("video").select("*");
    },
  };
}
