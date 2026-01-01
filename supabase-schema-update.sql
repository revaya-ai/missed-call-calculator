-- Update Calculator Submissions Table Schema
-- Run this SQL in your Supabase SQL Editor to add new columns

-- Add new columns for enhanced calculation results
ALTER TABLE calculator_submissions
ADD COLUMN IF NOT EXISTS monthly_call_volume DECIMAL(10,2),
ADD COLUMN IF NOT EXISTS perceived_answer_rate INTEGER,
ADD COLUMN IF NOT EXISTS realistic_answer_rate DECIMAL(5,2),
ADD COLUMN IF NOT EXISTS coverage_setup VARCHAR(50),
ADD COLUMN IF NOT EXISTS perceived_missed_weekly DECIMAL(10,2),
ADD COLUMN IF NOT EXISTS perceived_missed_monthly DECIMAL(10,2),
ADD COLUMN IF NOT EXISTS actual_missed_weekly DECIMAL(10,2),
ADD COLUMN IF NOT EXISTS actual_missed_monthly DECIMAL(10,2),
ADD COLUMN IF NOT EXISTS new_business_missed_monthly DECIMAL(10,2),
ADD COLUMN IF NOT EXISTS lost_customers_monthly DECIMAL(10,2),
ADD COLUMN IF NOT EXISTS lost_revenue_monthly DECIMAL(12,2),
ADD COLUMN IF NOT EXISTS lost_revenue_annual DECIMAL(12,2),
ADD COLUMN IF NOT EXISTS ai_missed_weekly DECIMAL(10,2),
ADD COLUMN IF NOT EXISTS ai_missed_monthly DECIMAL(10,2),
ADD COLUMN IF NOT EXISTS revenue_recovered_monthly DECIMAL(12,2),
ADD COLUMN IF NOT EXISTS revenue_recovered_annual DECIMAL(12,2),
ADD COLUMN IF NOT EXISTS cost_per_answered_call DECIMAL(10,2),
ADD COLUMN IF NOT EXISTS pdf_downloaded BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS pdf_downloaded_at TIMESTAMP;

-- Add comments to explain the new columns
COMMENT ON COLUMN calculator_submissions.monthly_call_volume IS 'Total monthly call volume (weekly calls × 4.33)';
COMMENT ON COLUMN calculator_submissions.perceived_answer_rate IS 'What the user thinks their answer rate is (from Q3)';
COMMENT ON COLUMN calculator_submissions.realistic_answer_rate IS 'Actual answer rate based on blended coverage rates';
COMMENT ON COLUMN calculator_submissions.coverage_setup IS 'Phone coverage type from Q4';
COMMENT ON COLUMN calculator_submissions.perceived_missed_weekly IS 'Missed calls per week based on perceived answer rate';
COMMENT ON COLUMN calculator_submissions.perceived_missed_monthly IS 'Missed calls per month based on perceived answer rate';
COMMENT ON COLUMN calculator_submissions.actual_missed_weekly IS 'Actual missed calls per week';
COMMENT ON COLUMN calculator_submissions.actual_missed_monthly IS 'Actual missed calls per month';
COMMENT ON COLUMN calculator_submissions.new_business_missed_monthly IS 'Potential new business opportunities missed (60% of total missed)';
COMMENT ON COLUMN calculator_submissions.lost_customers_monthly IS 'Lost customers per month (new business missed × close rate)';
COMMENT ON COLUMN calculator_submissions.lost_revenue_monthly IS 'Monthly revenue loss';
COMMENT ON COLUMN calculator_submissions.lost_revenue_annual IS 'Annual revenue loss';
COMMENT ON COLUMN calculator_submissions.ai_missed_weekly IS 'Missed calls per week with AI (95% answer rate)';
COMMENT ON COLUMN calculator_submissions.ai_missed_monthly IS 'Missed calls per month with AI (95% answer rate)';
COMMENT ON COLUMN calculator_submissions.revenue_recovered_monthly IS 'Monthly revenue recovered with AI';
COMMENT ON COLUMN calculator_submissions.revenue_recovered_annual IS 'Annual revenue recovered with AI';
COMMENT ON COLUMN calculator_submissions.cost_per_answered_call IS 'Cost per answered call (monthly spend ÷ answered calls)';
COMMENT ON COLUMN calculator_submissions.pdf_downloaded IS 'Whether the user downloaded the PDF report';
COMMENT ON COLUMN calculator_submissions.pdf_downloaded_at IS 'When the PDF was downloaded';

-- Create an index on pdf_downloaded for analytics queries
CREATE INDEX IF NOT EXISTS idx_calculator_submissions_pdf_downloaded
ON calculator_submissions(pdf_downloaded, created_at DESC);
