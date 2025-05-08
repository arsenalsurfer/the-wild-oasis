import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ngocahafgttvnkmuvmpa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nb2NhaGFmZ3R0dm5rbXV2bXBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2NzYwOTcsImV4cCI6MjA2MTI1MjA5N30.0ntWpx_3GG3Ueqsz9Kd_9ZtdmKW9UdpBf-TsUU33lg4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
