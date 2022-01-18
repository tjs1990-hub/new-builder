import dynamic from 'next/dynamic'

const Device = dynamic(() => import('./Device.tsx'), { ssr: false })

export default Device
