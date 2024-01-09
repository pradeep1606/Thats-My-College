import React from 'react'
import Course_notes from '@/components/Course_notes'
import Subject_notes from '@/components/Subject_notes'
import Allsubject_notes from '@/components/Allsubject_notes'
import Branch_notes from '@/components/Branch_notes'

const page = () => {
  return (
    <>
      {/* <Course_notes/>
      <Branch_notes/>
      <Subject_notes/> */}
      {/* <Allsubject_notes/> */}
      <div class="container  drop-shadow-lg bg-blue-100  mt-2 mb-2 sm:w-[50vw]   sm:ml-52 sm:rounded-md ">

<div class="flex flex-col justify-center  items-center  ">
    <a  class="text-xl  font-medium mt-5" href="#">1st Year</a>
    <h5 class=" text-2xl  font-semibold	mt-1  w-4/5 tracking-wide text-balance text-center">ENGINEERING CHEMISTRY (BT-101)</h5>

    <div class="bg-blue-500  w-4/5 drop-shadow-lg  mt-6 flex flex-col justify-center  items-center rounded">
        <h3 class="text-3xl text-white  font-medium  mt-2  mb-2 tracking-wide ">Syllabus</h3>
    </div>



    <div class=" flex  flex-col justify-center items-center  grid-rows-4 grid-flow-col gap-5  pt-11  w-full  ">
        <div class="bg-white shadow-md  w-11/12   pt-4 pl-4 pr-4  pb-4 rounded-md "> <span className=' font-semibold'>UNIT 1</span>:
            <p className='tracking-wide'>Module 1: Wave nature of particles and the Schrodinger equation (8 lectures) Introduction to
                Quantum mechanics, Wave nature of Particles, operators ,Time-dependent and timeindependent
                Schrodinger equation for wavefunction, Application: Particle in a One dimensional Box, Born
                interpretation, Free-particle wavefunction and wave-packets, vg and vp relation Uncertainty
                principle</p>
        </div>
        
        <div class="bg-white shadow-md w-11/12  text-wrap flex flex-wrap  pt-4 pl-4 pr-4  pb-4 rounded-md"><span className=' font-semibold'>UNIT 2</span>: 
            <p className='tracking-wide'> Module 2: Wave optics (8 lectures) Huygens’ principle, superposition of waves and interference
                of light by wave front splitting and amplitude splitting; Young’s double slit experiment,
                Newton’s rings, Michelson interferometer, MachZehnder interferometer.
                Farunhofer diffraction from a single slit and a circular aperture, the Rayleigh criterion for
                limit of resolution and its application to vision; Diffraction gratings and their resolving
                power. </p>
        </div>


        <div class="bg-white shadow-md w-11/12  text-wrap flex flex-wrap  pt-4 pl-4 pr-4  pb-4 rounded-md"><span className=' font-semibold'>UNIT 3</span>:
            <p className='tracking-wide'> 
                Module 3: Introduction to solids (8 lectures) Free electron theory of metals, Fermi level of
                Intrinsic and extrinsic, density of states, Bloch’s theorem for particles in a periodic
                potential, Kronig-Penney model(no derivation) and origin of energy bands. V-I characteristics of
                PN junction, Zener diode, Solar Cell, Hall Effec .</p>
        </div>
        <div class="bg-white shadow-md w-11/12  text-wrap flex flex-wrap  pt-4 pl-4 pr-4  pb-4 rounded-md"><span className=' font-semibold'>UNIT 4</span>: 
        <p className='tracking-wide'>   Module 4: Lasers (8 lectures) Einstein’s theory of matter radiation interaction and A and B
            coefficients; amplification of light by population inversion, different types of lasers: gas lasers
            ( He-Ne, CO2), solid-state lasers(ruby, Neodymium),Properties of laser beams: mono-chromaticity,
            coherence, directionality and brightness, laser speckles, applications of lasers in science,
            engineering and medicine. Introduction to Optical fiber, acceptance angle and cone, Numerical
            aperture, V number, attenuation.</p> </div>
        <div class="bg-white shadow-md w-11/12  text-wrap flex flex-wrap  pt-4 pl-4 pr-4  pb-4 rounded-md"><span className=' font-semibold'>UNIT 5</span>: 
        <p className='tracking-wide'>  Module 5: Electrostatics in vacuum (8 lectures) Calculation of electric field and electrostatic
            potential for a charge distribution; Electric displacement, Basic Introduction to Dielectrics,
            Gradient, Divergence and curl,Stokes’ theorem, Gauss Theorem, Continuity equation for current
            densities; Maxwell’s equation in vacuum and non-conducting medium; Poynting vector.</p> </div>

    </div>

    <div class="bg-blue-500  w-4/5 drop-shadow-lg  mt-12 flex flex-col justify-center  items-center rounded">
        <h3 class="text-3xl text-white  font-medium  mt-2 mb-2  ">NOTES</h3>
    </div>
</div>

<div class=" flex  justify-center  flex-col  grid-rows-4 grid-flow-col gap-5  mt-12   ml-5  ">

    <div  class="flex gap-5 items-start"><h2 class="font-semibold text-xl">Unit 1 </h2>  <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">view</button>  <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">Download</button>  </div>
    <div  class="flex gap-5 items-start"><h2 class="font-semibold text-xl">Unit 2</h2>  <button  class="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">view</button>  <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">Download</button> </div>
    <div  class="flex gap-5 items-start"><h2 class="font-semibold text-xl">Unit 3 </h2 ><button  class="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">view</button>  <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">Download</button>   </div>
    <div  class="flex gap-5 items-start"><h2 class="font-semibold text-xl">Unit 4 </h2 ><button  class="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">view</button>  <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">Download</button> </div>
    <div  class="flex gap-5 items-start mb-3"><h2 class="font-semibold text-xl">Unit 5</h2>  <button  class="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">view</button>  <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">Download</button> </div>

</div>

</div>
        
       
        
    </>
  )
}

export default page
