import * as THREE from 'three'

// const card = new Card({
//   width: 2,
//   height: 3,
//   color: #0077ff,
// })

class Card {
  constructor({ width, height, color }) {
    const geometry = new THREE.PlaneGeometry(width, height)
    const meterial = new THREE.MeshStandardMaterial({ color })

    const mesh = new THREE.Mesh(geometry, meterial)

    this.mesh = mesh
  }
}

export default Card