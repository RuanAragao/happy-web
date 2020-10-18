import React from 'react'
import { Link } from 'react-router-dom'

import { FiPlus } from 'react-icons/fi'
import '../styles/pages/orphanages-map.css'

import markerImg from '../images/map-marker.svg'

function OrphanagesMap () {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={markerImg} alt="Map Marker" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Campo Maior</strong>
          <span>Piauí</span>
        </footer>
      </aside>

      <div>Map</div>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#ffffff" />
      </Link>
    </div>
  )
}

export default OrphanagesMap