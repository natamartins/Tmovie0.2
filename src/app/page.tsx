"use client";
import useFetch from "@/Hooks/useFetch";

import BoxCarossel from '@/Components/BoxCarrossel/Index'
import CardRecomendation from '@/Components/BoxRecomendation/Index'

import CardMovies from '@/Components/BoxMovies/Index'
import CardSeries from '@/Components/BoxSeries/Index'

export default function Home() {
  const { data }: any = useFetch('/movie/popular?')

  return (
    <main style={{ position: 'relative', marginBottom: '10rem' }}>
      <BoxCarossel data={data} />

      <section className="home">
        <span className='boxShadow-right' />

        <h2>Tendencias</h2>
        <CardRecomendation />

        <h2>Filmes</h2>
        <CardMovies />

        <h2>Series</h2>
        <CardSeries />
      </section>
    </main>
  )
}
