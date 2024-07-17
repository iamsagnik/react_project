import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/Homecards'
import JobList from '../components/JobList'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
    <Hero title='Become a React Dev' subtitle='Find the React job that fits your skills and needs'/>
    <HomeCards/>      
    {/* <!-- Browse Jobs --> */}
    <JobList isHome = 'true'/>
    <ViewAllJobs/>
    </>
  )
}

export default HomePage