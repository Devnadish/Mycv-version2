import { createClient } from '@supabase/supabase-js';
// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabaseUrl =   "https://hobuhvctiemrblultosw.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvYnVodmN0aWVtcmJsdWx0b3N3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk0NTAxODQsImV4cCI6MTk5NTAyNjE4NH0.zB82a_ScEmXciyATfqQk7BqyTjVKqP1lQVxXXsw4WBI"

export default createClient(supabaseUrl, supabaseAnonKey);


