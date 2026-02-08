import React from 'react'
import { Wrench, ShieldCheck, Leaf, Clock } from 'lucide-react'
import './ManufacturingCapabilities.css'

const capabilities = [
  {
    icon: <Wrench size={24} strokeWidth={1.5} />,
    title: "Industrial Grade Equipment",
    desc: "We operate state-of-the-art machinery engineered for precision, durability, and consistent output — enabling us to deliver flawless products at scale without compromising on quality."
  },
  {
    icon: <ShieldCheck size={24} strokeWidth={1.5} />,
    title: "Quality Assured",
    desc: "Every product undergoes rigorous quality checks and controlled production processes to ensure exceptional performance, reliability, and long-term durability."
  },
  {
    icon: <Leaf size={24} strokeWidth={1.5} />,
    title: "Eco-Friendly Materials",
    desc: "Sustainability is built into our workflow. We use responsibly sourced materials and environmentally conscious printing processes to reduce impact while maintaining superior results."
  },
  {
    icon: <Clock size={24} strokeWidth={1.5} />,
    title: "Fast Production",
    desc: "Our optimized manufacturing pipeline and advanced automation allow us to meet tight deadlines with speed and accuracy — ensuring your projects are delivered on time, every time."
  }
]

export default function ManufacturingCapabilities() {
  return (
    <section className="manufacturing-capabilities">
      <div className="manufacturing-capabilities-container">
        <div className="capabilities-list">
          {capabilities.map((item, i) => (
            <div key={i} className="capability">
              <div className="capability-icon">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
