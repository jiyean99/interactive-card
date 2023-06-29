import * as THREE from 'three'

// const card = new Card({
//   width: 2,
//   height: 3,
//   color: #0077ff,
// })

class Card {
  constructor({ width, height, color }) {
    const geometry = new THREE.PlaneGeometry(width, height)
    const meterial = new THREE.MeshStandardMaterial({
      color,
      side: THREE.DoubleSide, //기본은 단면만 렌더링되므로 양면렌더링 추가하는 코드
      roughness: 0.5,
      metalness: 0.5,
    })

    const mesh = new THREE.Mesh(geometry, meterial)

    this.mesh = mesh
  }
}

export default Card