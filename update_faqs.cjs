const fs = require('fs');

const faqs = {
    "pt": [
        { "question": "É seguro saltar?", "answer": "Sim. Trabalhamos com instrutores experientes e equipamentos de ponta, seguindo os mais rigorosos padrões de segurança." },
        { "question": "Quem pode saltar?", "answer": "Maiores de 18 anos, com peso até 114kg, sem restrições médicas graves." },
        { "question": "Como funciona a gravação 360º?", "answer": "Durante todo o salto, nossa tecnologia registra tudo em 360º — você vai poder reviver cada segundo como se estivesse saltando de novo." },
        { "question": "É preciso agendar com antecedência?", "answer": "Sim, as vagas são limitadas e o agendamento é obrigatório para garantir sua segurança e conforto." },
        { "question": "O que devo vestir no dia do salto?", "answer": "Roupas confortáveis e tênis. Equipamentos de segurança são fornecidos por nós." }
    ],
    "en": [
        { "question": "Is it safe to jump?", "answer": "Yes. We work with experienced instructors and state-of-the-art equipment, following the strictest safety standards." },
        { "question": "Who can jump?", "answer": "Anyone over 18 years old, weighing up to 114kg (250lbs), without serious medical restrictions." },
        { "question": "How does the 360º recording work?", "answer": "Throughout the entire jump, our technology records everything in 360º — you'll be able to relive every second as if you were jumping again." },
        { "question": "Do I need to book in advance?", "answer": "Yes, spots are limited and booking is required to ensure your safety and comfort." },
        { "question": "What should I wear on the jump day?", "answer": "Comfortable clothes and sneakers. We provide all the safety equipment." }
    ],
    "es": [
        { "question": "¿Es seguro saltar?", "answer": "Sí. Trabajamos con instructores experimentados y equipos de última generación, siguiendo los más estrictos estándares de seguridad." },
        { "question": "¿Quién puede saltar?", "answer": "Mayores de 18 años, con un peso de hasta 114kg, sin restricciones médicas graves." },
        { "question": "¿Cómo funciona la grabación en 360º?", "answer": "Durante todo el salto, nuestra tecnología registra todo en 360º — podrás revivir cada segundo como si estuvieras saltando de nuevo." },
        { "question": "¿Es necesario reservar con antelación?", "answer": "Sí, las plazas son limitadas y la reserva es obligatoria para garantizar tu seguridad y comodidad." },
        { "question": "¿Qué debo vestir el día del salto?", "answer": "Ropa cómoda y zapatillas. Nosotros proporcionamos el equipo de seguridad." }
    ],
    "fr": [
        { "question": "Est-ce sûr de sauter ?", "answer": "Oui. Nous travaillons avec des instructeurs expérimentés et des équipements de pointe, en suivant les normes de sécurité les plus strictes." },
        { "question": "Qui peut sauter ?", "answer": "Toute personne de plus de 18 ans, pesant jusqu'à 114 kg, sans restrictions médicales graves." },
        { "question": "Comment fonctionne l'enregistrement à 360º ?", "answer": "Pendant tout le saut, notre technologie enregistre tout à 360º — vous pourrez revivre chaque seconde comme si vous sautiez à nouveau." },
        { "question": "Dois-je réserver à l'avance ?", "answer": "Oui, les places sont limitées et la réservation est obligatoire pour garantir votre sécurité et votre confort." },
        { "question": "Que dois-je porter le jour du saut ?", "answer": "Des vêtements confortables et des baskets. Nous fournissons l'équipement de sécurité." }
    ],
    "de": [
        { "question": "Ist es sicher zu springen?", "answer": "Ja. Wir arbeiten mit erfahrenen Instruktoren und modernster Ausrüstung nach den strengsten Sicherheitsstandards." },
        { "question": "Wer darf springen?", "answer": "Personen über 18 Jahre, mit einem Gewicht von bis zu 114 kg, ohne ernsthafte medizinische Einschränkungen." },
        { "question": "Wie funktioniert die 360º-Aufnahme?", "answer": "Während des gesamten Sprungs zeichnet unsere Technologie alles in 360º auf — Sie können jede Sekunde so erleben, als würden Sie noch einmal springen." },
        { "question": "Muss ich im Voraus buchen?", "answer": "Ja, die Plätze sind begrenzt und eine Buchung ist erforderlich, um Ihre Sicherheit und Ihren Komfort zu gewährleisten." },
        { "question": "Was soll ich am Sprungtag anziehen?", "answer": "Bequeme Kleidung und Turnschuhe. Die Sicherheitsausrüstung wird von uns gestellt." }
    ],
    "zh": [
        { "question": "跳伞安全吗？", "answer": "是的。我们与经验丰富的教练合作，使用最先进的设备，并遵循最严格的安全标准。" },
        { "question": "谁可以跳伞？", "answer": "年满18岁，体重不超过114公斤，无严重医疗限制的人士。" },
        { "question": "360度录像如何工作？", "answer": "在整个跳伞过程中，我们的技术会进行360度全方位记录——您将能够重温每一个瞬间，仿佛再次跳伞一样。" },
        { "question": "我需要提前预订吗？", "answer": "是的，名额有限，必须预订以确保您的安全和舒适。" },
        { "question": "跳伞当天我应该穿什么？", "answer": "舒适的衣服和运动鞋。我们提供所有安全设备。" }
    ],
    "hi": [
        { "question": "क्या कूदना सुरक्षित है?", "answer": "हाँ। हम अनुभवी प्रशिक्षकों और अत्याधुनिक उपकरणों के साथ, सबसे सख्त सुरक्षा मानकों का पालन करते हुए काम करते हैं।" },
        { "question": "कौन कूद सकता है?", "answer": "18 वर्ष से अधिक आयु का कोई भी व्यक्ति, जिसका वजन 114 किलो तक हो, और बिना किसी गंभीर चिकित्सा प्रतिबंध के।" },
        { "question": "360º रिकॉर्डिंग कैसे काम करती है?", "answer": "पूरी छलांग के दौरान, हमारी तकनीक हर चीज़ को 360º में रिकॉर्ड करती है - आप हर सेकंड को ऐसे फिर से जी सकेंगे जैसे कि आप फिर से कूद रहे हों।" },
        { "question": "क्या मुझे अग्रिम बुकिंग करने की आवश्यकता है?", "answer": "हाँ, स्थान सीमित हैं और आपकी सुरक्षा और आराम सुनिश्चित करने के लिए बुकिंग आवश्यक है।" },
        { "question": "छलांग वाले दिन मुझे क्या पहनना चाहिए?", "answer": "आरामदायक कपड़े और स्नीकर्स। हम सुरक्षा उपकरण प्रदान करते हैं।" }
    ],
    "ga": [
        { "question": "An bhfuil sé sábháilte léim a dhéanamh?", "answer": "Tá. Oibrímid le teagascóirí a bhfuil taithí acu agus trealamh den scoth, ag leanúint na gcaighdeán sábháilteachta is déine." },
        { "question": "Cé is féidir léim a dhéanamh?", "answer": "Duine ar bith os cionn 18 mbliana d'aois, a bhfuil meáchan suas le 114kg acu, gan aon srianta móra leighis." },
        { "question": "Conas a oibríonn an taifeadadh 360º?", "answer": "Le linn na léime go léir, déanann an teicneolaíocht againn gach rud a thaifeadadh i 360º — beidh tú in ann gach soicind a athbheochan amhail is dá mbeifeá ag léim arís." },
        { "question": "An gá dom áirithint a dhéanamh roimh ré?", "answer": "Is gá, tá líon na n-áiteanna teoranta agus is gá áirithint a dhéanamh chun do shábháilteacht agus do chompord a chinntiú." },
        { "question": "Cad ba cheart dom a chaitheamh ar lá na léime?", "answer": "Éadaí compordacha agus bróga reatha. Cuirimid na trealamh sábháilteachta ar fáil." }
    ],
    "ru": [
        { "question": "Безопасно ли прыгать?", "answer": "Да. Мы работаем с опытными инструкторами и современным оборудованием, соблюдая самые строгие стандарты безопасности." },
        { "question": "Кто может прыгать?", "answer": "Лица старше 18 лет, весом до 114 кг, без серьезных медицинских противопоказаний." },
        { "question": "Как работает запись 360º?", "answer": "Во время всего прыжка наша технология записывает все в 360º — вы сможете пережить каждую секунду, как если бы прыгали снова." },
        { "question": "Нужно ли бронировать заранее?", "answer": "Да, количество мест ограничено, и предварительное бронирование обязательно для вашей безопасности и комфорта." },
        { "question": "Что мне надеть в день прыжка?", "answer": "Удобную одежду и кроссовки. Мы предоставляем все средства безопасности." }
    ]
};

let content = fs.readFileSync('c:/Users/Fred/Desktop/SKYDIVE/SKYDIVE/src/data/translations.js', 'utf8');

for (const lang in faqs) {
    const faqArrayStr = JSON.stringify(faqs[lang], null, 12).replace(/"([^"]+)":/g, '"$1":');

    // We want to replace the array for "faq": [...] in each language.
    // The structure looks like   ga: { ... "faq": [ ... ], ... } 
    // This regex looks for "faq": [ ... ] 

    // So we can find the section for the specific lang using a replacer
    const langRegex = new RegExp(`(\\b${lang}\\s*:\\s*{[\\s\\S]*?)"faq"\\s*:\\s*\\[[\\s\\S]*?\\]`, 'g');
    content = content.replace(langRegex, `$1"faq": ${faqArrayStr}`);
}

fs.writeFileSync('c:/Users/Fred/Desktop/SKYDIVE/SKYDIVE/src/data/translations.js', content, 'utf8');
console.log('FAQs updated inside translations.js');
