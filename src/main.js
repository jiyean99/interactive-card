import * as THREE from 'three'
import Card from './card.js'

window.addEventListener('load', function() {
  init()
})

function init() {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true, // 배경 투명하게 처리하는 코드
  })

  // renderer의 배경속성을 설정하는 코드
  // 1. setClearAlpha(투명도 조절),  2. setClearColor(색상 조절)
  // renderer.setClearAlpha(0.5);
  renderer.setSize(window.innerWidth, window.innerHeight)

  document.body.appendChild(renderer.domElement)

  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    500,
  )

  camera.position.z = 25

  const card = new Card({
    width: 10,
    height: 15.8,
    color: '#0077ff',
  })

  scene.add(card.mesh)

  const ambientLight = new THREE.AmbientLight(0xffffff, .8)

  ambientLight.add(ambientLight)

  scene.add(ambientLight)

  render()

  function render() {
    renderer.render(scene, camera)

    requestAnimationFrame(render)
  }

  function handleResize() {
    camera.aspect = window.innerWidth / window.innerHeight

    camera.updateProjectionMatrix()

    renderer.setSize(window.innerWidth, window.innerHeight)

    renderer.render(scene, camera)
  }

  window.addEventListener('resize', handleResize)
}