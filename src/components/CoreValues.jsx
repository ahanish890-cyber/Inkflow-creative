import React from 'react'
import { Target, Eye, Zap, Shield, Recycle, Users, ArrowRight, Fingerprint } from 'lucide-react'
import './CoreValues.css'

const coreValues = [
  {
    id: "VAL-EXE-01",
    icon: <Target className="w-6 h-6" />,
    title: "Excellence in Execution",
    desc: "Precision engineering meets creative vision. We maintain 99.9% quality standards across all projects with rigorous protocols."
  },
  {
    id: "VAL-PART-02",
    icon: <Users className="w-6 h-6" />,
    title: "Client-Centric Partnership",
    desc: "Your success drives ours. Dedicated account managers, personalized solutions, and transparent communication at every stage."
  },
  {
    id: "VAL-SUST-03",
    icon: <Recycle className="w-6 h-6" />,
    title: "Sustainable Excellence",
    desc: "Eco-conscious innovations using sustainable materials and processes. Environmental responsibility without quality compromise."
  },
  {
    id: "VAL-VEL-04",
    icon: <Zap className="w-6 h-6" />,
    title: "Innovation & Velocity",
    desc: "Cutting-edge technology platform with AI-driven workflows. Rapid turnaround without sacrificing precision or longevity."
  }
]

export default function CoreValues() {
  return (
    <section className="core-values-section">
      {/* Mission & Vision */}
      <div className="core-values-container">
        <div className="mission-vision-grid">
          {/* Mission Block */}
          <div className="mission-block">
            <div className="block-tag">Objective_Alpha</div>
            <div className="block-content">
              <div className="block-icon mission-icon">
                <Target size={28} />
              </div>
              <h2>Our Mission</h2>
              <p>To empower organizations with enterprise-grade solutions that drive measurable business impact through precision and innovation.</p>
            </div>
            <div className="block-decoration"></div>
          </div>

          {/* Vision Block */}
          <div className="vision-block">
            <div className="block-tag vision-tag">Horizon_Status</div>
            <div className="block-content">
              <div className="block-icon vision-icon">
                <Eye size={28} />
              </div>
              <h2>Our Vision</h2>
              <p>To be India's most trusted and innovative technology partner, recognized globally for operational excellence and transformative impact.</p>
            </div>
            <div className="hud-overlay">
              <Fingerprint size={80} />
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Title */}
        <div className="values-header">
          <div className="values-label">
            <span>Operational DNA</span>
          </div>
          <h2 className="values-title">
            Our Core <span>Values.</span>
          </h2>
        </div>

        {/* Values Grid */}
        <div className="values-grid">
          {coreValues.map((value, i) => (
            <div key={i} className="value-card">
              <div className="card-tag">{value.id}</div>
              
              <div className="card-icon">
                <div className="laser-line"></div>
                {value.icon}
              </div>

              <h3>{value.title}</h3>
              <p>{value.desc}</p>

              <div className="card-footer">
                <div className="status-dots">
                  <div className="dot active"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <div className="detail-link">
                  Detail <ArrowRight size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
