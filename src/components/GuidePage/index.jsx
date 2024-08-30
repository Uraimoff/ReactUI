import React, { useContext } from "react";
import LanguageContext from "./../../components/Component/contexts/LanguageContext"; // Make sure to adjust the import paths as necessary
import { ThemeContext } from "./../../components/Component/contexts/ThemeContext"; // Make sure to adjust the import paths as necessary
import { message } from "antd";

const Guides = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const info = () => {
    message.info(
      language === "en"
        ? "Copied"
        : language === "ru"
        ? "Скопирован"
        : "Nusxalandi"
    );
  };
  const getText = () => {
    switch (language) {
      case "en":
        return {
          introduction:
            "Welcome to DocUI, a collection of pre-built, customizable React components designed to make your development process faster and more efficient. This documentation will guide you through the installation process, usage examples, and customization options available with DocUI components.",
          installation:
            "To start using DocUI components in your project, install the package via npm or yarn:",
          usage:
            "Once you've installed the package, you can start using the components by importing them into your project:",
          customization:
            "DocUI components are designed to be easily customizable. You can override the default styles using Tailwind CSS classes or by providing custom styles via props.",
          theming:
            "DocUI supports both light and dark themes. You can toggle between themes using the provided theme switcher component or by applying the appropriate CSS classes to your root element.",
        };
      case "ru":
        return {
          introduction:
            "Добро пожаловать в DocUI, коллекцию готовых, настраиваемых компонентов React, разработанных для ускорения и упрощения вашего процесса разработки. Эта документация проведет вас через процесс установки, примеры использования и параметры настройки компонентов DocUI.",
          installation:
            "Чтобы начать использовать компоненты DocUI в вашем проекте, установите пакет через npm или yarn:",
          usage:
            "После установки пакета вы можете начать использовать компоненты, импортируя их в свой проект:",
          customization:
            "Компоненты DocUI разработаны для легкой настройки. Вы можете переопределить стили по умолчанию с помощью классов Tailwind CSS или передавать пользовательские стили через пропсы.",
          theming:
            "DocUI поддерживает как светлые, так и темные темы. Вы можете переключаться между темами с помощью предоставленного компонента переключателя тем или применяя соответствующие CSS классы к вашему корневому элементу.",
        };
      case "uz":
        return {
          introduction:
            "DocUI-ga xush kelibsiz, bu sizning rivojlanish jarayonini tezlashtirish va samaraliroq qilish uchun ishlab chiqilgan, oldindan tayyorlangan va sozlanadigan React komponentlari to‘plami. Ushbu hujjat DocUI komponentlarini o‘rnatish jarayoni, foydalanish misollari va sozlash imkoniyatlarini ko‘rsatadi.",
          installation:
            "Loyihangizda DocUI komponentlarini ishlatishni boshlash uchun npm yoki yarn orqali paketni o‘rnating:",
          usage:
            "Paketni o‘rnatganingizdan so‘ng, komponentlarni loyihangizga import qilib ishlatishingiz mumkin:",
          customization:
            "DocUI komponentlari oson sozlanadigan qilib ishlab chiqilgan. Siz Tailwind CSS sinflaridan foydalanib, standart uslublarni o‘zgartirishingiz yoki propslar orqali maxsus uslublarni taqdim etishingiz mumkin.",
          theming:
            "DocUI yorug‘ va qorong‘u mavzularni qo‘llab-quvvatlaydi. Siz mavzular o‘rtasida taqdim etilgan mavzularni almashtirish komponenti yordamida yoki asosiy elementingizga mos CSS sinflarini qo‘llash orqali almashishingiz mumkin.",
        };
      default:
        return {};
    }
  };

  const text = getText();

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        info();
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  return (
    <div
      className={`mb-[50px] min-h-screen ${
        theme === "light"
          ? "bg-defaultLightBg text-gray-900"
          : "bg-defaultDarkBg text-gray-100"
      } p-6`}
    >
      <div className="max-w-[1240px] w-full mx-auto space-y-12">
        <h1 className="text-4xl font-bold">
          {language === "en"
            ? "DocUI Documentation"
            : language === "ru"
            ? "Документация DocUI"
            : "DocUI Hujjati"}
        </h1>

        <div>
          <h2 className="text-3xl font-semibold mb-4">
            {language === "en"
              ? "Introduction"
              : language === "ru"
              ? "Введение"
              : "Kirish"}
          </h2>
          <p className="text-lg">{text.introduction}</p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4">
            {language === "en"
              ? "Usage"
              : language === "ru"
              ? "Использование"
              : "Foydalanish"}
          </h2>
          <p className="text-lg">{text.usage}</p>
          <div
            className={`relative ${
              theme === "light"
                ? "bg-secondaryLightBg text-gray-900"
                : "bg-secondaryDarkBg text-gray-100"
            } p-4 rounded-lg`}
          >
            <button
              className="absolute top-2 right-2 text-white bg-gray-700 p-1 rounded hover:bg-gray-600"
              onClick={() =>
                copyToClipboard(
                  `import { Button, Card } from '@docui/components';`
                )
              }
            >
              Copy
            </button>
            <pre className="text-sm overflow-x-auto">
              <code>{`import { Button, Card } from '@docui/components';`}</code>
            </pre>
          </div>
          <p className="text-lg mt-4">
            {language === "en"
              ? "Here's a simple example of how to use the Button and Card components:"
              : language === "ru"
              ? "Вот простой пример того, как использовать компоненты Button и Card:"
              : "Mana Button va Card komponentlaridan qanday foydalanish misoli:"}
          </p>
          <div
            className={`relative ${
              theme === "light"
                ? "bg-secondaryLightBg text-gray-900"
                : "bg-secondaryDarkBg text-gray-100"
            } p-4 rounded-lg`}
          >
            <button
              className="absolute top-2 right-2 text-white bg-gray-700 p-1 rounded hover:bg-gray-600"
              onClick={() =>
                copyToClipboard(`
import React from 'react';
import { Button, Card } from '@docui/components';

const Example = () => (
  <Card>
    <h3 className="text-2xl font-bold">Hello, DocUI!</h3>
    <Button variant="primary">Click me</Button>
  </Card>
);

export default Example;`)
              }
            >
              Copy
            </button>
            <pre className="text-sm overflow-x-auto">
              <code>
                {`import React from 'react';
import { Button, Card } from '@docui/components';

const Example = () => (
  <Card>
    <h3 className="text-2xl font-bold">Hello, DocUI!</h3>
    <Button variant="primary">Click me</Button>
  </Card>
);

export default Example;`}
              </code>
            </pre>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4">
            {language === "en"
              ? "Customization"
              : language === "ru"
              ? "Настройка"
              : "Sozlash"}
          </h2>
          <p className="text-lg">{text.customization}</p>
          <div
            className={`relative ${
              theme === "light"
                ? "bg-secondaryLightBg text-gray-900"
                : "bg-secondaryDarkBg text-gray-100"
            } p-4 rounded-lg`}
          >
            <button
              className="absolute top-2 right-2 text-white bg-gray-700 p-1 rounded hover:bg-gray-600"
              onClick={() =>
                copyToClipboard(
                  `<Button className="bg-blue-500 hover:bg-blue-700 text-white">Custom Button</Button>`
                )
              }
            >
              Copy
            </button>
            <pre className="text-sm overflow-x-auto">
              <code>
                {`<Button className="bg-blue-500 hover:bg-blue-700 text-white">Custom Button</Button>`}
              </code>
            </pre>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4">
            {language === "en"
              ? "Theming"
              : language === "ru"
              ? "Темизация"
              : "Mavzular"}
          </h2>
          <p className="text-lg">{text.theming}</p>
          <div
            className={`relative ${
              theme === "light"
                ? "bg-secondaryLightBg text-gray-900"
                : "bg-secondaryDarkBg text-gray-100"
            } p-4 rounded-lg`}
          >
            <button
              className="absolute top-2 right-2 text-white bg-gray-700 p-1 rounded hover:bg-gray-600"
              onClick={() =>
                copyToClipboard(
                  `<div className="dark"><Button>Dark Mode Button</Button></div>`
                )
              }
            >
              Copy
            </button>
            <pre className="text-sm overflow-x-auto">
              <code>
                {`<div className="dark">
  <Button>Dark Mode Button</Button>
</div>`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guides;
