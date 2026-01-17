const Service = () => {
    return (
    <section className="bg-gray-100 text-gray-200 py-16 px-6">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold text-red-600 mb-8">How You Can Work With Me</h2>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-all ease-in-out duration-500 transform border border-red-800/40">
        <h3 className="text-xl font-semibold mb-2 text-black">One on one Coaching</h3>
        <p className="text-black text-sm mb-4">
          Unlock your potential through mindset and goal-setting sessions.
        </p>
        <a href="/services" className="text-red-500 hover:text-red-300">Learn More →</a>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-all ease-in-out duration-500 transform border border-red-800/40">
        <h3 className="text-xl font-semibold mb-2 text-black"> Clarity Sessions</h3>
        <p className="text-gray-400 text-sm mb-4">
          Build meaningful change with guidance tailored to your vision.
        </p>
        <a href="/services" className="text-red-600 hover:text-red-300">Learn More →</a>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-all ease-in-out duration-500 transform border border-red-800/40">
        <h3 className="text-xl font-semibold mb-2 text-black">Group trainings</h3>
        <p className="text-gray-400 text-sm mb-4">
          Navigate emotional clarity and find purpose-driven balance.
        </p>
        <a href="/services" className="text-red-600 hover:text-red-300">Learn More →</a>
      </div>
    </div>
  </div>
</section>

    )
}

export default Service