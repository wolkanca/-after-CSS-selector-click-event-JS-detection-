## ::after CSS selector click event JS detection 

The goal here is to find the :before or ::after part of an element, this is possible and can work well when combined with CSS. Although something will come up on stackoverflow when searched, or it can answer when asked to artificial intelligence (i haven’t tried it, but i’m sure it will from now on), but as someone who knows the importance of producing content on the internet for future generations, I record this and similar information on my blog after specific problems I encounter.

//

## ::after CSS seçici tıklama olayı JS tespiti

Burada amaç bir elemanın :before veya ::after kısmına tıklandığını bulmak, bu mümkün ve CSS ile kombine yapıldığında güzel işler çıkartabilir. Her ne kadar arama yapıldığında stackoverflow’da bir şeyler çıkar ya da yapay zekaya sorulduğunda cevap verebilir(_denemedim ama bundan sonra vereceği garanti_) ancak internete içerik üretmenin gelecek nesiller için önemini bilen biri olarak spesifik karşılaştığım problemler sonrasında bloguma bu ve benzer bilgileri kaydediyorum.





### jQuery:
```js

    $('.targetdiv').click(function(e) {
    	if (e.offsetX > $(this).width() || e.offsetY > $(this).height()) {
    		$(this).addClass('target');
    		console.log('clicked');
    	}
    });
```

### Pure JS:
```js

    targetdiv = document.querySelector('span');
    targetdiv.addEventListener('click', function(e) {
    	if (e.offsetX > targetdiv.offsetWidth) {
    		console.log('clicked');
    		targetdiv.className = 'target';
    	}
    });
```

Github: [github.com/wolkanca/-after-CSS-selector-click-event-JS-detection-](https://github.com/wolkanca/-after-CSS-selector-click-event-JS-detection-)

Afiyet olsun.
