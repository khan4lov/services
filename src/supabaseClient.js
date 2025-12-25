import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pdrigvhbgwcwunqihrpk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkcmlndmhiZ3djd3VucWlocnBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY2ODM5MzAsImV4cCI6MjA4MjI1OTkzMH0.J5USRgdl3ElXD2IvHRwGMpgirbtpEH8G1dSutEVz2e8'

export const supabase = createClient(supabaseUrl, supabaseKey)
