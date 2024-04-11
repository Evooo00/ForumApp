import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rcoujxzhkpbnywychqfl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjb3VqeHpoa3Bibnl3eWNocWZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4MzY1NTIsImV4cCI6MjAyODQxMjU1Mn0.3d776_3Nlzb9iw3gC0UeDXvYtZH9O2rwgMzZ3cubcJ0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
