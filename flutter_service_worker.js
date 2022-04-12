'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e07910a06a086c83ba41827aa00b26ed",
".git/config": "0a4ca014e880ebafddb352cd72d9e592",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "feffab9534ffd416da28c3f517aaa6ae",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "95e3e7adcfde3974ef456f7beadcb67d",
".git/logs/refs/heads/main": "dd9801e8364e722cf71ea95f24dbcdc4",
".git/logs/refs/remotes/origin/main": "f945a3fdde84ac474e95bc042f47901d",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/060b8bd503260fe5f4474524d3512167d3d08a": "19456aa226abf34d7d70839120c841d8",
".git/objects/1c/6f89a56f1671940cd1ffe3c67002aa9686047a": "74c93ecc4f859efc4aa10e0de6cd6a97",
".git/objects/1c/b1fae057b8bdf99abd326758827983fdd5662e": "9c4df33f90908d7517c216fd6c6e9747",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/26/ebfcbbc5cd44448c85a5e51316b689541e9a2e": "9546ccb4992a79fa9ad1ff8764bed23a",
".git/objects/27/7e4d09eecca0a30c06b00fa5f427c8dde4bb5e": "5b826f15040ecc5b2ff7b2827fbf2420",
".git/objects/2c/d29bacb45734a881deb69f3b9f4d01429c69b3": "2a30fa490658bb336b7bf2a851efb5d3",
".git/objects/2d/9c91cedaa6a209723fd6801682ca4c72e78156": "f52004848ad2645e8fc46b476d06f7ac",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/33/72c94d7834711c30c1a6731fe880b8b0f3d62a": "ba9ce8d8b36197cedb96d07b60176033",
".git/objects/34/6a349675c01c82bf36b5ccc915ff624ec2699d": "23f85dc97cf4aabdf572cc8c87b99ea6",
".git/objects/37/0861b26214027a7814207c82df6d48750d18d6": "8068ef1c1d39082395d2f07007499c81",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/5f/3f13ddc10283308495f25074c1c1817169df75": "bd2627ea7bc7606d188b51b6fbcd673a",
".git/objects/5f/c7acb4a95b7ac9180ed12e89f4d5342c1bf4b8": "d9ebd972a907779e1c1fca81d8997650",
".git/objects/61/c91c4591c89a4acba009c7b4ba698d64898460": "96838325e1de6640b7899679f204ab24",
".git/objects/64/b40cbd5b935e7270abd0d5512b50ef0d1c4b6b": "cd9b47fe1bae7ff85fc0524d7dfe6871",
".git/objects/6b/c5217c345ed9ce0d07f0d918508b341aa14d7a": "8a4dea1e001edf91712105c94c709174",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/00bd88dc756f67587260fba41aba5b42971ddc": "e2f5c1d7b7b70003ec551d1bab4dd89f",
".git/objects/7e/11c99719f85fe85fbc8d52848a3f077120a42a": "96eb4e85b521a9f5f420f6f81c1e4db2",
".git/objects/83/d3237797e6a281c0e329add98fd0e5d1913628": "3cefc991c2db8c809d8fc36a6f9b9bf1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/4f638d9e76fd6be165925e6886b64987a321a8": "6d3c4327cad79ee6d52849712f6d935f",
".git/objects/96/07ecf70815c8912e509e7848794bbc1d4f6dc4": "a7ddc821d235383f9140f89a1ba37408",
".git/objects/9d/a94459a59db4224e731a55945bbe8ba83859e5": "d46baa79e900211682dcfac2c2b58878",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/935225fc79de8046f64168e4e3db1df684b0af": "ecf4f373a5e0675b9d4fe48b3666689a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b3/d8f1fbeaba2ba8ab01957d2ca4972846b18ac8": "244303d656099e3517ba21e7024d6b0c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/1d16eac3c0b1374039ca2ac7867d64bf2edea0": "dca2f982ef9c3314c01fd65b07342113",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/cb/70cfadf7dcd74e4042a8d340a63719c574e28d": "89f517babda3e8160757caef0a5f11a7",
".git/objects/cd/b96d287f410125bb116a54e55ae5403834432d": "46a8b758f1a0a2197b84faefbdf97d45",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/b8d8545ae4c7e8f2f4b75b4fda5555f9a1b5a6": "f5d6286ed866d32eb72d9e43f84e93e2",
".git/objects/d6/c19234737d21eed81c67e1eebacea94bea8fe1": "1531e3331e753537836c4ec89f9277fd",
".git/objects/dc/96db290c1443111a7c9e9593ec02dad7f9d512": "59cc06922cce2340f0fe6533ff026a42",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/e8ef03518fd4e2f25c4452c5ad8bd713079807": "815334444dd08c8f9f39c76e4ee5a8a5",
".git/objects/f3/1547bfe3a7f2abf413532d73319b9a7b0e9e2a": "aa1202638d9011d10867e5db5ddda000",
".git/objects/fc/8ea0add061d1dfa9f0010693558a2efc329712": "be8c09e6c181001e762fcfa6deb94b60",
".git/refs/heads/main": "472212536f8c9adbc9d4d7e462c027e3",
".git/refs/remotes/origin/main": "472212536f8c9adbc9d4d7e462c027e3",
"assets/AssetManifest.json": "24685a27108de71105b56cebd7077760",
"assets/assets/fonts/Cairo-Black.ttf": "c3da5664903bac89a1e5a6f38e47a778",
"assets/assets/fonts/Cairo-Bold.ttf": "ef55322bc2031017175022b779940cb0",
"assets/assets/fonts/Cairo-ExtraBold.ttf": "0645b8a99ffdc54a258b3eb7f6d160b9",
"assets/assets/fonts/Cairo-ExtraLight.ttf": "a20fc041a3249119d5ac5232a72aab6d",
"assets/assets/fonts/Cairo-Light.ttf": "ce6526395448171bce996359f9b41af7",
"assets/assets/fonts/Cairo-Medium.ttf": "dcb85dee1c4674ba69ab76c7275b515e",
"assets/assets/fonts/Cairo-Regular.ttf": "374ef4fe60ef13426296c292bba5e237",
"assets/assets/fonts/Cairo-SemiBold.ttf": "b9eb3a03009d618aa53a0ca8eaa6ab4b",
"assets/assets/images/logo.png": "ad49bb236240c5a07a616dfbf006c6b8",
"assets/assets/images/logo.svg": "3a23a0152806ceeff77eee7025f4694a",
"assets/FontManifest.json": "8c07103460827efbf317f2e81ec7f73b",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "205a444992f2c128a043d3a62af80bf3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "210ba3cc0fa3c8cfe98eb1d593633d2c",
"/": "210ba3cc0fa3c8cfe98eb1d593633d2c",
"main.dart.js": "9ed30fb1bff4c501bc821d1093bfd956",
"manifest.json": "ce2d43700c3b42872dd2e61597a09bfb",
"README.md": "39c86aa5d1bb754926dd7f88cea3dcf5",
"version.json": "3aacb0a6ed9f5552b4f966b6e22450d5",
"webSplash.png": "3be184005b4e2cf3e9101c3d3cfbef63"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
