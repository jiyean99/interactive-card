import * as THREE from 'three'

// const card = new Card({
//   width: 2,
//   height: 3,
//   color: #0077ff,
// })

class Card {
  constructor({ width, height, radius, color }) {
    const x = width / 2 - radius
    const y = height / 2 - radius
    const shape = new THREE.Shape()

    shape
      .absarc(x, y, radius, Math.PI / 2, 0, true) // 1사분면방향의 코너
      .lineTo(x + radius, -y) // 우측면
      .absarc(x, -y, radius, 0, -Math.PI / 2, true)// 2사분면방향의 코너
      .lineTo(-x, -y - radius) // 하단면
      .absarc(-x, -y, radius, -Math.PI / 2, Math.PI, true)// 3사분면방향의 코너
      .lineTo(-(x + radius), y, radius, Math.PI, Math.PI / 2, true) // 좌측면
      .absarc(-x, y, radius, Math.PI, Math.PI / 2, true)// 4사분면방향의 코너

    const geometry = new THREE.ExtrudeGeometry(shape,{
      depth: 0.01,
      bevelThickness: 0.1, // 경사면의 둥근면 제거
    })
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