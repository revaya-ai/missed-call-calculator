-- New Missed Call Calculator Submissions Table
-- Run this SQL in your Supabase SQL Editor

-- First, drop the old table if it exists
DROP TABLE IF EXISTS calculator_submissions;

-- Create the new table with updated schema
CREATE TABLE calculator_submissions (
  -- Primary key and metadata
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,

  -- User information
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  business_name TEXT,

  -- User input fields
  industry_type TEXT NOT NULL,
  calls_per_week INTEGER NOT NULL CHECK (calls_per_week >= 0),
  answer_percentage INTEGER NOT NULL CHECK (answer_percentage >= 0 AND answer_percentage <= 100),
  phone_coverage TEXT NOT NULL,
  job_value DECIMAL(10,2) NOT NULL CHECK (job_value >= 0),
  close_rate INTEGER NOT NULL CHECK (close_rate >= 0 AND close_rate <= 100),
  monthly_spending DECIMAL(10,2) CHECK (monthly_spending >= 0),

  -- Calculated result fields
  actual_answer_rate INTEGER NOT NULL,
  daily_missed_calls DECIMAL(5,1) NOT NULL,
  monthly_missed_calls INTEGER NOT NULL,
  monthly_lost_revenue DECIMAL(12,2) NOT NULL,
  annual_lost_revenue DECIMAL(12,2) NOT NULL
);

-- Add an index on created_at for faster queries when sorting by date
CREATE INDEX idx_calculator_submissions_created_at ON calculator_submissions(created_at DESC);

-- Add an index on email for faster lookups by user
CREATE INDEX idx_calculator_submissions_email ON calculator_submissions(email);

-- Enable Row Level Security (RLS)
ALTER TABLE calculator_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert (for calculator submissions)
CREATE POLICY "Allow public insert" ON calculator_submissions
  FOR INSERT
  WITH CHECK (true);

-- Create a policy that allows only authenticated users to view all submissions
-- (You can modify this based on your needs)
CREATE POLICY "Allow authenticated read" ON calculator_submissions
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Optional: Create a policy to allow anonymous users to view their own submissions
-- (Uncomment if you want users to see their submission without authentication)
-- CREATE POLICY "Allow public read own submission" ON calculator_submissions
--   FOR SELECT
--   USING (true);
