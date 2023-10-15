'use client';
import Image from 'next/image'
import Navbar from './Components/navBar'
import Box from './Components/Box';
import { AppStoreButton } from "react-mobile-app-button";
import MobileStoreButton from './Components/MobileStoreButton';
import ExpandableCard from './Components/Applynow';

export default function Home() {
  const IOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";
  return(
    <>
      <Navbar/>




      <div className='first-div w-11/12 max-w-6xl  text-black bg-[#EEEBFE] rounded-3xl p-8 pt-40 grid grid-cols-2 gap-4 justify-items-stretch m-8'>
        <div className='mb-100'>  <p>Ahead app</p>
        <div className='header1-styling text-6xl w-20%'>
          <h1 className='font-bold justify-self-auto '>Master your life by mastering emotions</h1>
        </div>
        <div className="mt-4 static w-60 h-30">
          <MobileStoreButton
            store="ios"
            url={IOSUrl}
            linkProps={{ title: 'iOS Store Button' }}
          />
          <img src='starImage.svg' alt='Image Alt Text' className='w-48 h-150 object-cover' />
        </div> 
        </div>
       
        <img src='mobile.svg' alt='Image Alt Text' className='w-100 h-250   object-cover' />
        
      </div>



      <div className="container mx-auto h-[20vh] p-6 bg-white border border-white flex justify-between m-8 ">
        <div className="portion flex-1 text-center mx-2">
          EQ beats IQ
        </div>
        <div className="portion flex-1 text-center mx-2">
          People with high emotional intelligence(EQ) live more fulfilled lives. They tend to be happier and have healthier relationships
        </div>
        <div className="portion flex-1 text-center mx-2">
          They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29K a year.
        </div>
      </div>

      <div>
        <p className='font-bold text-4xl text-left m-8 '>Does this Sound familiar...</p>
      </div>

      <div className="flex justify-between w-full space-x-2 mb- 4 overflow-x-auto">
        <Box color="#e0f4fc" emoji="😊" miniHeading="Quabble with your partner" text="Accuse them of doing that thing you think they always do it!), instead of being calm and addressing their reasons.
" />
        <Box color="#f0ecfc" emoji="😠"miniHeading="You argue with a colleague" text="This is You get angry and defensive, instead of staying open and working towards common ground" />
        <Box color="#6341ef" emoji="😯" miniHeading2="You get a promotion at work" text2="You question yourself and wonder when they'll realise you're an unqualified imposter, instead of trustinf yourself & your abilities" />
        <Box color="#ffecd4" emoji="🤨" miniHeading="You attend a classes reugularly" text="You compare yourself with your peers' achievements, instead of making self-judgment more independent on others." />
    </div>

    <div className='flex flex-col items-center justify-center h-screen w-screen bg-white m-8'>
       <div className='flex flex-col w-full items-start md:w-8/12 lg:w-[80% h-screen bg-[#FEF7F1] rounded-3xl p-8 m-8'>

   
    <p className='text-lg mb-2'>Built out of frustration</p>
    <h1 className='text-6xl font-bold mb-10'>Meet the ahead app</h1>
    
   
    <div className='flex'>
     
      <div className='flex-shrink-0 mr-12'>
        <img src='meetaheadapp.svg' alt='Your Image Description' className='w-full' />
      </div>
      
      
      <div className='flex-grow max-lg'>
        <p className='mb-6'>A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.</p>
        <p>Think of it as a pocket cheerleader towards a <br/>better, more fulfilling.</p>
      </div>
        </div>
      </div>
    </div>




    <div className="h-screen bg-white flex flex-col justify-center items-start p-10">
      <p className="text-lg mb-2">Wrong with self-improvement & how we're fixing it.</p>
      <h1 className="text-6xl font-bold mb-10">Self-improvement. Ugh.</h1>
    
      <div className="flex overflow-y-auto scrolls-class">
        <div className="border-l-4 border-[##40C2FC] h-full mr-6 pl-6 overflow-y-auto">
            <div className="bg-[##40C2FC] w-3 h-3 rounded-full mb-8"></div>
            <div className="bg-[##40C2FC] w-3 h-3 rounded-full mb-8"></div>
            <div className="bg-[##40C2FC] w-3 h-3 rounded-full mb-8"></div>
            <div className="bg-[##40C2FC] w-3 h-3 rounded-full mb-8"></div>
        </div>

        <div className='overflow-y-auto'>
            <h2 className="text-2xl mb-4">It's not as easy as 1-2-3.</h2>
            <p className="mb-10">The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).</p>
            
            <h2 className="text-2xl mb-4">Old habits are hard to break.</h2>
            <p className="mb-10">And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use.</p>

            <h2 className="text-2xl mb-4">You and your motivation don't have a long-term relationship.</h2>
            <p className="mb-10">Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exercises will help you stick to your goals.</p>

            <h2 className="text-2xl mb-4">Books just don't offer practical solutions.</h2>
            <p>Luckily, we provide actionable insights, not just theory. We're here to help, not just to inform.</p>
            <h2 className="text-2xl mb-4">Books just don't offer practical solutions.</h2>
            <p>Luckily, we provide actionable insights, not just theory. We're here to help, not just to inform.</p>
            <h2 className="text-2xl mb-4">Books just don't offer practical solutions.</h2>
            <p>Luckily, we provide actionable insights, not just theory. We're here to help, not just to inform.</p> <h2 className="text-2xl mb-4">Books just don't offer practical solutions.</h2>
            <p>Luckily, we provide actionable insights, not just theory. We're here to help, not just to inform.</p>
        </div>
         </div>
      </div>



      <div className="h-screen bg-white flex flex-col justify-center items-center p-10">
    <div className="flex space-x-16 w-full justify-start">
        <div>
            <h1 className="text-4xl font-bold">Be the best you <br/> with EQ</h1>
        </div>
        <div>
            <p className="text-base">Not having your own emotions <br/> under control might be holding <br/> you back.</p>
        </div>
        <div>
            <p className="text-base">Additionally, not understanding <br/>those of others stops you from<br/> being the best parent, friend you can be.</p>
        </div>
    </div>
</div>



      
<div className='flex flex-col items-center justify-center h-screen w-screen bg-white'>
 
  <div className='flex flex-col w-full md:w-8/12 lg:w-[80%] bg-[#ECF7FD] h-5/6 rounded-3xl p-8 text-center'>  
    <p className='text-center mb-4 text-lg '>Let your friends, family, and co-workers(anoymously) rate your social skills.</p>
    <p className='text-center text-5xl font-bold mb-8'>Ever wondered what others think of you?</p>

    <div className='flex justify-center mt-3'>
        <img src='Badges.svg' alt="Badges" className='w-[50%] md:w-[80%] lg:w-[60%]' />
    </div>
    <div className="flex w-full justify-between mt-4">
        <p className="w-1/3 text-center text-base">Answer your social skills</p>
        <p className="w-1/3 text-center text-base">Let others anonymously answerr the same <br/> questions about you</p>
        <p className="w-1/3 text-center text-base">Find out where you and others see things <br/>the same way -and where not!</p>
    </div>


        <div className='flex justify-center mt-8'>
          <div className='flex flex-col items-center mt-8 w-[600px] md:w-5/12 lg:w-6/12 bg-white h-[200px] rounded-3xl shadow-lg'>
            <div className='flex items-center justify-center w-full h-full'>
                <div className=' w-3/5 h-[1px] bg-gray-400 relative mt-8'>
                  
                  <div className="absolute left-[15%] bottom-[15px] bg-[#6341EF] text-white rounded-xl px-4 py-2">You</div>
                  <div className="absolute left-[40%] top-[15px] transform -translate-x-1/2 bg-[#40C2FC] text-white rounded-xl px-4 py-2">Anonymous 1</div>
                  <div className="absolute right-[15%] bottom-[15px] bg-[#FDB338]  text-white rounded-xl px-4 py-2">Anonymous 2</div>
                  <div className="absolute right-[1%] top-[15px] bg-[#58C896] text-white rounded-xl px-4 py-2">Anonymous 3</div>

                  <span className='absolute bg-[#6341EF] w-[10px] h-[10px] rounded-full top-[-5px] left-[25%]'></span>
                  <span className='absolute bg-[#40C2FC] w-[10px] h-[10px] rounded-full top-[-5px] left-[50%]'></span>
                  <span className='absolute bg-[#FDB338] w-[10px] h-[10px] rounded-full top-[-5px] right-[25%]'></span>
                  <span className='absolute bg-[#58C896] w-[10px] h-[10px] rounded-full top-[-5px] right-[10%]'></span>
                </div>
            </div>
            </div>
            </div>

  </div>
</div>



<div className='flex flex-col items-center justify-center h-screen w-screen bg-white text-center'>
    
    <p className='text-center mb-3 text-lg '>We take privacy seriously</p>
    <p className='text-center text-4xl font-bold mb-3'>Before you get started</p>
    <p className='text-center mb-6 text-lg text-gray-500'>"We won't share answers with anyone (and won't ever tell <br/> you which friends said what about you)"</p>
    <p className='text-center mb-8 text-lg '>With love,</p>
    <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 mb-4">
       Start a test
    </button>
    <p className='text-center mb-6 text-base text-gray-500'>Take only 5 minutes</p>

</div>

<div className='flex flex-col items-center justify-center h-screen w-screen bg-white m-8'>
       <div className='flex flex-col w-full items-start md:w-8/12 lg:w-[80% h-screen bg-[#F3F1FF] rounded-3xl p-8 m-8 overflow-y-auto your-container-class2'>
          
          <div className="grid grid-cols-2 gap-20 justify-between">
              <h1 className="text-5xl font-bold mb-8 ">Work with us</h1>
              <div className="flex items-center justify-end"> 
                <h1 className="text-5xl font-bold mb-8 text-[#6341ED]">ahead</h1>
              </div>
          </div>
          
          <div className=" flex flex-row  overflow-y-auto your-container-class">
           <div classname= 'w -[50%]'>
                 <div className="w-[45%] flex flex-col items-start rounded-3xl bg-white p-8 mb-0 shadow">
              <img src='purplecartoon.svg' alt="Badges" className='w-[40%] md:w-[60%] lg:w-[20%]' />
              <p className='text-center mb-4text-lg font-semibold '>About</p>
              <p className=' text-base text-gray-500'>At ahead our goal is to make self-improvement fun and lasting. We know there's a way how to make</p>
                </div>
            
                   <div className="w-[45%] flex flex-col items-start rounded-3xl bg-[#FEF7F1] p-8 shadow">
              <p className='text-center mb-4text-lg font-semibold '>Product</p>
              <p className=' text-base text-gray-500'>Sure, you could spend ages reading books or sitting in seminaars on how to becomea better spouse, parent, or manager-like we did...</p>
                  </div>
            </div>

            <div className="w-[50%] flex flex-col items-start max-h-[60vh] space-y-4">
                <div className="rounded-3xl bg-white p-8 shadow-md mt-4 mb-4">
                    <p className='text-base font-semibold'>Power through, even when the going gets tough</p>
                    <p className='text-base text-gray-500'>We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.</p>
                </div>
                <div className="rounded-3xl bg-white p-8 shadow-md mt-4 mb-4">
                    <p className='text-base font-semibold'>Learn more about who you are and where you want to go</p>
                    <p className='text-base text-gray-500'>We ask the right questions to help you better unnderstand why you do things the way you do.</p>
                </div>
                <div className="rounded-3xl bg-white p-8 shadow-md mt-4 mb-4">
                    <p className='text-base font-semibold'>Play and grow together  with others on the same journey</p>
                    <p className='text-base text-gray-500'>Ahead feels like a game, not like a chore. see yourself grow everyday towards achieving you goals!</p>
                </div>
                <div className="rounded-3xl bg-white p-8 shadow-md mt-4 mb-4">
                    <p className='text-base font-semibold'>Another Box to write the content, just fo the sake of it.</p>
                    <p className='text-base text-gray-500'>Content for another box, Content for another box Content for another box Content for another box </p>
                </div>
                
            </div>

        </div>

      </div>
</div>
    

<div className='flex flex-col items-center justify-center h-screen w-screen bg-white m-8'>
       <div className='flex flex-col w-full items-start md:w-8/12 lg:w-[80% h-screen bg-whiterounded-3xl p-8 m-8'>
       <h1 className='text-5xl font-bold mb-10'>Open Vacanices</h1>
      
      <div className='flex flex-row space-x-4 mb-16'>
        <ExpandableCard color="#FEFBEC" miniHeading="Senior Full-Stack Engineer" text=" •Full-Time Position " text2="•Berlin or remote" text3="•$65-85K, 0.5-1.50% equity share options" button/>
        <ExpandableCard color="#FEFBEC" miniHeading="Senior Designer" text=" •Full-Time Position " text2="•Berlin or remote" text3="•$40-55K, 0.25-0.50% equity share options" button />
        <ExpandableCard color="#FEFBEC" miniHeading="Superstar Intern" text=" •Full-Time Position " text2="•Berlin or remote" text3="•$20-24K, 0.5-1.50% equity share options" button />
      </div>

      <div className="w-[90%] border-b-2 border[#f2f2f2] mx-auto mt-8"></div>


      

      </div>
      <div className="flex flex-col items-center justify-center mt-8 space-y-4">
          <div className="flex flex-col items-center mx-auto">
            <Image src="/logoAhead.svg" alt="Logo" width={60} height={60} />
            <h1 className="text-2xl font-bold mt-2 text-center">ahead</h1>
          </div>

          <div className="flex space-x-8 items-center mx-auto">
            <div className="flex items-center space-x-2 text-center">
              <span>Auguststraße 26, 10117 Berlin</span>
            </div>
            <div className="flex items-center space-x-2 text-center"> 
              <span>trinibhaskar@gmail.com</span>
            </div>
          </div>

          <div className="mx-auto">
            <MobileStoreButton
              store="ios"
              url={IOSUrl}
              linkProps={{ title: 'iOS Store Button' }}
            />
          </div>

          <div className="text-gray-500 text-center mx-auto">
            © 2022 Ahead app. All rights reserved
          </div>
      </div>
</div>





    </>
  )
}
