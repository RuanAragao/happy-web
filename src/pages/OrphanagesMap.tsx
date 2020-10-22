import React from 'react'
import { Link } from 'react-router-dom'

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet'

import { FiPlus, FiArrowRight } from 'react-icons/fi'
import '../styles/pages/orphanages-map.css'
import 'leaflet/dist/leaflet.css'

import markerImg from '../images/map-marker.svg'

const mapIcon = Leaflet.icon({
  iconUrl: markerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

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

      <Map
        center={[-4.8282718, -42.1868981]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
        className="map-popup"
      >
        {/* <TileLayer url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png" /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

        <Marker
          position={[-4.8282718, -42.1868981]}
          icon={mapIcon}
        >
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
          >
            Popup não poupa ninguém
            <Link to="">
              <FiArrowRight size={20} color="#FFF" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#ffffff" />
      </Link>
    </div>
  )
}

export default OrphanagesMap