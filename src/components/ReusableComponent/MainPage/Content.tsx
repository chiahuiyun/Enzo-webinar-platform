import Link from 'next/link'
import React from 'react'

const Content = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto py-24'>
        <div className='text-center mb-16'>
            <h2
              className='text-4xl md:text-5xl font-bold mb-8'
              style={{
                fontFamily: 'var(--font-orbitron), system-ui, sans-serif',
                background:
                  'linear-gradient(to right, rgb(192,132,252), rgb(79,209,197))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              How Enzo Help Your Business?
            </h2>
          </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        {/* Crystal Object with simpler, more professional styling */}
        <div className='relative' style={{ perspective: 1000 }}>
          <img
            src='/crystal.png'
            alt='AI Crystal'
            className='w-full max-w-md object-contain'
            style={{
              boxShadow: '0 0 30px rgba(79, 209, 197, 0.2)',
            }}
          />

          {/* Professional feature indicators */}
          <div className='absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-purple-500/20 backdrop-blur-sm rounded-sm text-xs text-white'>
            AI Analytics
          </div>
          <div className='absolute top-1/4 right-0 transform translate-x-1/2 px-3 py-1 bg-blue-500/20 backdrop-blur-sm rounded-sm text-xs text-white'>
            Real-time Insights
          </div>
          <div className='absolute bottom-1/4 left-0 transform -translate-x-1/2 px-3 py-1 bg-teal-500/20 backdrop-blur-sm rounded-sm text-xs text-white'>
            Smart Automation
          </div>
          <div className='absolute bottom-0 right-0 transform translate-x-1/3 translate-y-1/3 px-3 py-1 bg-indigo-500/20 backdrop-blur-sm rounded-sm text-xs text-white'>
            Engagement Tools
          </div>
        </div>
      </div>

      {/* Stats Section - More professional */}
      <div className='relative bg-black px-4 py-16'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='p-8 text-center border border-purple-500/10 bg-black/50 rounded-lg'>
              <div className='text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400 mb-2'>
                98%
              </div>
              <p className='text-gray-300 text-lg'>Audience Satisfaction</p>
              <div className='mt-4 h-1 w-1/3 mx-auto bg-gradient-to-r from-purple-400 to-teal-400'></div>
            </div>

            <div className='p-8 text-center border border-blue-500/10 bg-black/50 rounded-lg'>
              <div className='text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2'>
                10x
              </div>
              <p className='text-gray-300 text-lg'>Engagement Rate</p>
              <div className='mt-4 h-1 w-1/3 mx-auto bg-gradient-to-r from-blue-400 to-purple-400'></div>
            </div>

            <div className='p-8 text-center border border-teal-500/10 bg-black/50 rounded-lg'>
              <div className='text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-400 mb-2'>
                35%
              </div>
              <p className='text-gray-300 text-lg'>Conversion Increase</p>
              <div className='mt-4 h-1 w-1/3 mx-auto bg-gradient-to-r from-teal-400 to-blue-400'></div>
            </div>

            <div className='p-8 text-center border border-indigo-500/10 bg-black/50 rounded-lg'>
              <div className='text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400 mb-2'>
                5K+
              </div>
              <p className='text-gray-300 text-lg'>Global Customers</p>
              <div className='mt-4 h-1 w-1/3 mx-auto bg-gradient-to-r from-indigo-400 to-violet-400'></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - More professional */}
      <div className='features-section relative bg-black py-24 px-4'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2
              className='text-4xl md:text-5xl font-bold mb-8'
              style={{
                fontFamily: 'var(--font-orbitron), system-ui, sans-serif',
                background:
                  'linear-gradient(to right, rgb(192,132,252), rgb(79,209,197))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Enterprise Features
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Our platform integrates cutting-edge AI technology with
              enterprise-grade security and scalability.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            <div className='p-8 border border-purple-500/10 bg-black/50 rounded-lg'>
              <div className='text-purple-400 text-3xl mb-5'>
                <i className='ri-live-line'></i>
              </div>
              <h3 className='text-xl font-bold mb-4 text-white'>
                Live AI Assistance
              </h3>
              <p className='text-gray-300'>
                Real-time AI-powered assistance to answer attendee questions and provide insights during your webinar.
              </p>
            </div>

            <div className='p-8 border border-blue-500/10 bg-black/50 rounded-lg'>
              <div className='text-blue-400 text-3xl mb-5'>
                <i className='ri-bar-chart-grouped-line'></i>
              </div>
              <h3 className='text-xl font-bold mb-4 text-white'>
                Advanced Analytics
              </h3>
              <p className='text-gray-300'>
                Comprehensive analytics dashboard with engagement metrics, attendee behavior, and conversion tracking.
              </p>
            </div>

            <div className='p-8 border border-teal-500/10 bg-black/50 rounded-lg'>
              <div className='text-teal-400 text-3xl mb-5'>
                <i className='ri-customer-service-2-line'></i>
              </div>
              <h3 className='text-xl font-bold mb-4 text-white'>
                Interactive Engagement
              </h3>
              <p className='text-gray-300'>
                Polls, Q&A sessions, breakout rooms, and interactive elements to keep your audience engaged.
              </p>
            </div>

            <div className='p-8 border border-indigo-500/10 bg-black/50 rounded-lg'>
              <div className='text-indigo-400 text-3xl mb-5'>
                <i className='ri-global-line'></i>
              </div>
              <h3 className='text-xl font-bold mb-4 text-white'>
                Global Reach
              </h3>
              <p className='text-gray-300'>
                Host webinars for audiences anywhere in the world with
                localization support and auto-translation.
              </p>
            </div>

            <div className='p-8 border border-pink-500/10 bg-black/50 rounded-lg'>
              <div className='text-pink-400 text-3xl mb-5'>
                <i className='ri-file-list-3-line'></i>
              </div>
              <h3 className='text-xl font-bold mb-4 text-white'>
                Automated Follow-ups
              </h3>
              <p className='text-gray-300'>
                Intelligent follow-up system that sends personalized content based on attendee engagement.
              </p>
            </div>

            <div className='p-8 border border-amber-500/10 bg-black/50 rounded-lg'>
              <div className='text-amber-400 text-3xl mb-5'>
                <i className='ri-slideshow-3-line'></i>
              </div>
              <h3 className='text-xl font-bold mb-4 text-white'>
                White-label Solution
              </h3>
              <p className='text-gray-300'>
                Full white-label solution with custom branding options to match your company's identity.
              </p>
            </div>
          </div>

          <div className='text-center mt-16'>
            <Link href='#features'>
              <button className='px-8 py-4 text-lg font-semibold text-white rounded-md bg-gradient-to-r from-purple-600/80 to-blue-600/80 hover:from-purple-600 hover:to-blue-600 transition-all duration-300'>
                Explore All Features
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
