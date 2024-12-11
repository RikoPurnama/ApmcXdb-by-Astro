import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://yxotzoevqwkognurpchv.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4b3R6b2V2cXdrb2dudXJwY2h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5NTA2NjcsImV4cCI6MjA0ODUyNjY2N30.0YstzNH0Ze9b9vffIWGaWAMS82BqhDqEmC_I3kYQQHg";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase as s };
