function About() {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          Нам нравится в
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              ХомМире
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Добро пожаловать в наш уютный интернет-магазин! Мы создаём атмосферу
        тепла и стиля, предлагая эксклюзивные декоративные аксессуары для дома:
        от изящных ваз и подсвечников до авторских подушек и настенных панно.
        Каждый предмет — тщательно отобран за качество, дизайн и способность
        преобразить ваш интерьер. Быстрая доставка, удобная оплата и забота о
        каждом клиенте — потому что ваш дом заслуживает самого лучшего!
      </p>
    </>
  );
}

export default About;
