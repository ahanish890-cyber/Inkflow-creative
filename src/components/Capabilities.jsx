import React from 'react'
import { Printer, Layers, Sparkles, Gauge, ArrowUpRight } from 'lucide-react'
import './Capabilities.css'

const capabilityData = [
  {
    icon: <Printer className="w-5 h-5" />,
    title: "Digital Print",
    metric: "500+",
    desc: "High-speed, ISO-certified color production for enterprise-scale demand."
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Offset Solutions",
    metric: "1k+",
    desc: "Large volume production with precision brand-color consistency."
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Premium Pkg",
    metric: "250+",
    desc: "Bespoke structural packaging designed for luxury retail environments."
  },
  {
    icon: <Gauge className="w-5 h-5" />,
    title: "Queue Mgmt",
    metric: "100+",
    desc: "Integrated flow hardware for high-traffic public and private hubs."
  }
]

export default function Capabilities() {
  return (
    <section className="capabilities-section">
      <div className="capabilities-container">
        {/* Header */}
        <div className="capabilities-header">
          <div className="header-title">
            <h2>
              Enterprise <span>Capabilities.</span>
            </h2>
          </div>
          <p className="header-desc">
            Proven engineering expertise across specialized printing and hardware domains.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="capabilities-grid">
          {capabilityData.map((item, i) => (
            <div key={i} className="capability-item">
              <div className="item-header">
                <div className="item-icon">
                  {item.icon}
                </div>
                <div className="item-metric">
                  {item.metric} Projects
                </div>
              </div>

              <h3 className="item-title">{item.title}</h3>
              <p className="item-desc">{item.desc}</p>

              <div className="item-footer">
                <span>View Specs</span>
                <ArrowUpRight size={14} />
              </div>

              <div className="item-accent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
