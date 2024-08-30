import React from 'react';
import ModalVideo from '@/components/modal-video';

export default function Hero() {
  const containerStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '160px',
    overflow: 'hidden',
    fontFamily: "'Lato', sans-serif",
    fontSize: '35px',
    lineHeight: '40px',
    color: '#ecf0f1',
  };

  const containerInnerStyle: React.CSSProperties = {
    fontWeight: '600',
    overflow: 'hidden',
    height: '40px',
    padding: '0 40px',
    position: 'relative',
  };

  const beforeAfterStyle = {
    position: 'absolute',
    top: '0',
    color: '#16a085',
    fontSize: '42px',
    lineHeight: '40px',
    animation: 'opacity 2s infinite',
  };

  const containerListStyle: React.CSSProperties = {
    marginTop: '0',
    paddingLeft: '110px',
    textAlign: 'left',
    listStyle: 'none',
    animation: 'change 10s infinite',
  };

  const listItemStyle = {
    lineHeight: '40px',
    margin: '0',
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Illustration behind hero content */}
        <div
          className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none"
          aria-hidden="true"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {/* SVG illustration omitted for brevity */}
        </div>

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">
              Agence Digitale et
              <div style={containerStyle}>
                <div style={containerInnerStyle}>
                  <div
                    style={{
                      ...beforeAfterStyle,
                      content: "'['",
                      left: '0',
                      position: 'absolute',
                    }}
                  />
                  <div
                    style={{
                      ...beforeAfterStyle,
                      content: "']'",
                      right: '0',
                      position: 'absolute',
                    }}
                  />
                  <ul style={containerListStyle}>
                    <li style={listItemStyle}>Innovante !</li>
                    <li style={listItemStyle}>Ambicieuse !</li>
                    <li style={listItemStyle}>Technologique !</li>
                    <li style={listItemStyle}>Fun !</li>
                  </ul>
                </div>
              </div>
            </h1>
            <p
              className="text-xl text-gray-400 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Donnez vie à vos ambitions digitales et transformez vos idées en
              réalité.
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-white">Call to Action</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Define animations */}
      <style jsx global>{`
        @keyframes opacity {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes change {
          0%, 12.66%, 100% { transform: translate3d(0, 0, 0); }
          16.66%, 29.32% { transform: translate3d(0, -25%, 0); }
          33.32%, 45.98% { transform: translate3d(0, -50%, 0); }
          49.98%, 62.64% { transform: translate3d(0, -75%, 0); }
          66.64%, 79.3% { transform: translate3d(0, -50%, 0); }
          83.3%, 95.96% { transform: translate3d(0, -25%, 0); }
        }
      `}</style>
    </section>
  );
}
