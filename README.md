

[![**Polución lumínica, del ruido y el aire**](https://github.com/alejoduque/TiempoGranular/blob/master/logo/tg_logo.png)](http://tiempogranular.radiolibre.cc)


**¿Cómo suena la noche contrastada al dia? Este proyecto pretende
convertir el espacio del Museo en un instrumento científico
ubicado en el cruce específico planetario de Lat 6.2525, Lon
-75.569167. Desde allí monitorearé con instrumentos científicos
durante 3 días - 72 horas, recolectando in-situ datos del
aire, niveles de ruido y el cielo. Daremos cuenta de 3 tipos
de polución: aire, ruido, luz y las contrastaré de manera
poética al ser presentadas vía una interfaz web que permitirá
ver el cielo con un lente gran angular en tiempo real,
mientras escuchamos la grabación del audio correspondiente a
los sonidos ocurridos 12h antes con un micrófono de frontera
amplia. El día será la noche. La noche sera el día. Dicha
interfaz también presentará los datos de niveles acústicos, de
material particulado en el aire pm2.5 y nos dejará ver la alta
contaminación lumínica en el centro de la ciudad durante la
noche gracias al uso de una cámara especial para el registro de
meteoros. Será una interfaz más contemplativa que científica
donde se presentarán en video los registros más significativos
de las 72 horas de captura. Aves, aviones, truenos, satélites,
ovnis(?) acompañados de los ruidos de la noche y del dia,
lejanos y cercanos en el tiempo granular.**


La intención es montar una pequeña estación de monitoreo temporal (un fin de semana) en el
patio central del Museo de Antioquia para recolectar datos durante 3 días, iniciando un
viernes y terminando el lunes siguiente. Con una cámara que mira al cielo para intentar
captar el paso de meteoros de marca Wattec y usada por experimentos de la NASA, se
registrarán 72 horas en total de imágenes de video del cielo de la cuidad, tanto de día
como de noche para ser contrastadas con la grabación digital acústica, usando un micrófono
especial ambiental o de límite (boundary mic de AKG).
Los niveles de ruido y de pm2.5 (material particulado) serán obtenidos con el sensor
AQA creado con el colectivo un/loquer https://alejo.radiolibre.cc/ agentes-sensores





**Web:**


Una página web presentará en tiempo real los datos de la captura durante el fin de
semana y posteriormente aparecerán en ella 10 video clips de entre 1 y 2 minutos con los
momentos más relavantes sea por la calidad, textura, ritmo, cantos o picos en los datos.
El sonido de los clips estará siempre compuesto por la captura de audio realizada 12
horas antes del video, contrastando así el sonido ambiente opuesto a la hora a la que
corresponden las imágenes de video. La noche tendrá el ruido del día, y el día, por el
contrario, no tendrá el ruido típico sino el nocturno... el ladrido de un perro a la
distancia, el llamado de su dueño o el canto de algún ave al amanecer.


Usando software libre desarrollado sobre el software Hydra de Olivia Jackson:


Instrucciones para correr hydra en un servidor:

To run:
- install nodejs
- download repository
- enter repository folder (from terminal):
```cd ckweb-web```
- install dependencies
```npm install .```
- start dev server
```npm run start```

To build:
```npm run build```

To deploy to github pages:
```npm run deploy```

To merge gh-pages branch to master:
```git merge origin/gh-pages master --allow-unrelated-histories```
