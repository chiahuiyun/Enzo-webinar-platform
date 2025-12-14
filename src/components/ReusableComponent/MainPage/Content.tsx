import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Content = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto py-24'>
        <div className='text-center mb-16' id='about'>
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
          <p className='text-gray-300 text-lg max-w-3xl mx-auto mb-10'>
            A SaaS webinar platform with an AI sales agent lets businesses host
            live or automated webinars while engaging attendees in real time.
            The AI agent answers questions, qualifies leads, and provides
            personalized follow-ups. This boosts conversion rates and automates
            the sales process efficiently.
          </p>
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        {/* Crystal Object with simpler, more professional styling */}
        <div className='relative' style={{ perspective: 1000 }}>
          <Image
            src='/crystal.png'
            alt='AI Crystal'
            width={500}
            height={500}
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
          <div className='absolute bottom-2 right-0 transform translate-x-1/3 translate-y-1/3 px-3 py-1 bg-indigo-500/20 backdrop-blur-sm rounded-sm text-xs text-white'>
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
      <div
        className='features-section relative bg-black py-24 px-4'
        id='features'
      >
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
                Real-time AI-powered assistance to answer attendee questions and
                provide insights during your webinar.
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
                Comprehensive analytics dashboard with engagement metrics,
                attendee behavior, and conversion tracking.
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
                Polls, Q&A sessions, breakout rooms, and interactive elements to
                keep your audience engaged.
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
                Intelligent follow-up system that sends personalized content
                based on attendee engagement.
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
                Full white-label solution with custom branding options to match your company&apos;s identity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AI-Powered Section - More professional */}
      <div className='flex items-center justify-center pt-8'>
        <h2
          style={{
            fontFamily: 'var(--font-orbitron), system-ui, sans-serif',
            letterSpacing: '1px',
          }}
          className='text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400'
        >
          AI-Powered Enterprise Solution
        </h2>
      </div>
      <div
        className='flex items-center justify-center h-150 bg-black' id='contact'
      >
        <div className='rounded-xl flex flex-col md:flex-row items-center w-full max-w-7xl md:gap-8'>
          <div className='md:w-1/2 px-0 relative'>
            <div className='absolute top-0 left-0 w-32 h-32 -translate-x-16 -translate-y-16 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-2xl'></div>
            <div className='absolute bottom-0 right-0 w-40 h-40 translate-x-8 translate-y-8 bg-gradient-to-r from-teal-500/10 to-transparent rounded-full blur-2xl'></div>
            <Image
              src='/ai.png'
              alt='AI Character'
              width={500}
              height={500}
              className='object-contain w-full h-auto relative z-10'
            />
          </div>
          <div className='md:w-1/2 text-white'>
            <p className='mb-6 text-lg text-gray-300 leading-relaxed'>
              Our enterprise platform integrates advanced AI technology to enhance every aspect of your webinar experience, from preparation to follow-up.
            </p>
            <p className='mb-6 text-lg text-gray-300 leading-relaxed'>
              With enterprise-grade security, scalability, and dedicated
              support, our platform is trusted by leading organizations
              worldwide.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 mt-8'>
              <button className='px-8 py-4 text-lg font-semibold text-white rounded-md bg-gradient-to-r from-purple-600/80 to-blue-600/80 hover:from-purple-600 hover:to-blue-600 transition-all duration-300'>
                <Link href='/sign-up'>Try Now</Link>
              </button>
              <Link href='https://youtu.be/eJZDwK57sfM'>
                <button className='px-8 py-4 text-lg font-semibold rounded-md text-gray-300 border border-gray-700 hover:border-purple-500/50 hover:text-white transition-all duration-300'>
                  Request Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section - More professional */}
      <div className='relative bg-black px-4 py-24' id='testimonials'>
        <div className='max-w-7xl mx-auto'>
          {/* Section heading */}
          <div className='text-center mb-16 relative z-10'>
            <h2
              className='text-4xl font-bold mb-8'
              style={{
                fontFamily: 'var(--font-orbitron), system-ui, sans-serif',
                background:
                  'linear-gradient(to right, rgb(96,165,250), rgb(168,85,247))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Client Testimonials
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Trusted by leading organizations worldwide
            </p>
          </div>

          {/* Testimonials grid */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10'>
            <div className='p-8 border border-purple-500/10 bg-black/50 rounded-lg relative'>
              <div className='mb-6'>
                <div className='flex mb-4'>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i key={star} className='ri-star-fill text-yellow-400'></i>
                  ))}
                </div>
                <p className='text-gray-300'>
                  &quot;The AI-powered features have revolutionized our webinar strategy. We&apos;ve seen a 40% increase in attendee engagement.&quot;
                </p>
              </div>

              <div className='flex items-center mt-4'>
                <div className='w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold'>
                  JD
                </div>
                <div className='ml-3'>
                  <div className='font-semibold text-white'>
                    Jessica Donovan
                  </div>
                  <div className='text-sm text-gray-400'>
                    Marketing Director, TechGrowth
                  </div>
                </div>
              </div>
            </div>

            <div className='p-8 border border-blue-500/10 bg-black/50 rounded-lg relative'>
              <div className='mb-6'>
                <div className='flex mb-4'>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i key={star} className='ri-star-fill text-yellow-400'></i>
                  ))}
                </div>
                <p className='text-gray-300'>
                  &quot;As an educational institution, we needed a reliable and scalable solution. This platform has exceeded our expectations.&quot;
                </p>
              </div>

              <div className='flex items-center mt-4'>
                <div className='w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 flex items-center justify-center text-white font-bold'>
                  RM
                </div>
                <div className='ml-3'>
                  <div className='font-semibold text-white'>
                    Robert Martinez
                  </div>
                  <div className='text-sm text-gray-400'>
                    Director of E-Learning, Edu Global
                  </div>
                </div>
              </div>
            </div>

            <div className='p-8 border border-teal-500/10 bg-black/50 rounded-lg relative'>
              <div className='mb-6'>
                <div className='flex mb-4'>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i key={star} className='ri-star-fill text-yellow-400'></i>
                  ))}
                </div>
                <p className='text-gray-300'>
                  &quot;The analytics capabilities are incredible. Being able to see real-time engagement metrics has transformed our sales process.&quot;
                </p>
              </div>

              <div className='flex items-center mt-4'>
                <div className='w-10 h-10 rounded-full bg-gradient-to-r from-teal-600 to-indigo-600 flex items-center justify-center text-white font-bold'>
                  AK
                </div>
                <div className='ml-3'>
                  <div className='font-semibold text-white'>Alexandra Kim</div>
                  <div className='text-sm text-gray-400'>
                    VP of Sales, Innovate Solutions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
