export {};
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

declare module '*.glb';
declare module '*.png';

declare module 'meshline' {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
     meshLineGeometry: any;
     meshLineMaterial: any;
    }
  }
}

// import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
// import * as THREE from 'three';

// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       meshLineGeometry: ReactThreeFiber.Object3DNode<MeshLineGeometry, typeof MeshLineGeometry>;
//       meshLineMaterial: ReactThreeFiber.Object3DNode<MeshLineMaterial, typeof MeshLineMaterial>;
//     }
//   }
// }
