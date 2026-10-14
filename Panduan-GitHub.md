# RSVP Alyn & Syarifuddin di GitHub Pages

Pakej ini mengekalkan paparan versi terkini: CSS, susun atur, teks, nama pengantin, fon, bunga, peta, borang dan fail lagu yang sama. CSS dan fail MP3 telah dibandingkan dengan sumber asal. Sambungan Google Sheets disesuaikan untuk GitHub Pages dan aset disimpan dalam repo.

## Fail dalam ZIP

| Kandungan | Kegunaan |
| --- | --- |
| `github-pages/index.html` | HTML penuh dengan CSS dan JavaScript. |
| `github-pages/assets/` | Lagu MP3, tujuh fail font, lesen font, ikon dan kalendar. |
| `github-pages/.nojekyll` | Membolehkan fail statik diterbitkan terus. |
| `apps-script/Code.gs` | Kod backend untuk ditampal dalam Google Apps Script. |
| `Kod-HTML-GitHub.txt` | Salinan HTML yang sama untuk dibuka melalui Notepad. |

GitHub Pages boleh digunakan pada **repo Public dengan GitHub Free**. Laman ini tidak menggunakan hosting atau aset daripada Sites/ChatGPT. Anda masih memerlukan backend Google Apps Script dan Google Sheets untuk RSVP.

## 1. Sediakan backend Apps Script

1. Buka spreadsheet anda:

   https://docs.google.com/spreadsheets/d/1yBOP11_vfsCi3MxrrsHuGknbMBv5WABZeS_EBlMNvtM/edit

2. Pilih **Extensions → Apps Script**. Gunakan projek Apps Script sedia ada supaya URL `/exec` boleh dikekalkan.
3. Ganti keseluruhan kandungan **Code.gs** dengan fail **apps-script/Code.gs** dalam ZIP, atau **Code-GitHub.gs** yang dimuat turun berasingan.
4. Simpan. Pilih fungsi **setup** dan tekan **Run** sekali. Benarkan akses Google apabila diminta. ID spreadsheet sudah diisi dalam kod.
5. Pilih **Deploy → Manage deployments → ikon pensel → Version: New version → Deploy**.
6. Pastikan deployment ialah **Web app**, **Execute as: Me**, **Who has access: Anyone**. Untuk projek baharu, gunakan **Deploy → New deployment → Web app** dengan tetapan tersebut.

URL sedia ada sudah dimasukkan dalam HTML:

```js
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxhklSa5d8aU9RsF7I0C2fu7OmqjvIia9zL5qwSHgWXaNKrNtGUH487lNUo-ip_uSbz/exec';
```

Jika anda membuat deployment baharu dan mendapat URL berbeza, cari **const SCRIPT_URL** dalam index.html dan ganti nilainya dengan URL `/exec` yang baharu. Ganti hanya nilai URL itu.

**Kod backend lama perlu dikemas kini**, walaupun URL `/exec` masih sama. Versi GitHub menggunakan `doPost` untuk menghantar kiriman dan `doGet` untuk membaca ucapan serta pengesahan. Tindakan `doGet` sedia ada untuk laman Sites dikekalkan. Tab RSVP dan susunan tujuh lajurnya juga dikekalkan.

Jika anda pernah menambah **RSVP_API_KEY** dalam Script Properties, versi laman statik ini memerlukan endpoint awam; buang property tersebut untuk menggunakan pakej ini. Jangan tampal kunci rahsia ke HTML. Jika anda tidak pernah menetapkannya, teruskan ke langkah repo.

## 2. Buat repo GitHub

1. Log masuk di https://github.com.
2. Tekan **+ → New repository**.
3. Isi **Repository name**: `rsvp-alyn-syarifuddin`.
4. Pilih **Public**, hidupkan **Add README**, kemudian tekan **Create repository**.

Nama repo ini menghasilkan laman projek dengan alamat seperti `https://USERNAME.github.io/rsvp-alyn-syarifuddin/`. Gantikan USERNAME dengan nama akaun GitHub anda apabila membaca contoh tersebut.

## 3. Muat naik fail laman

1. Muat turun dan ekstrak **RSVP-GitHub-Pages.zip**.
2. Buka folder **github-pages**.
3. Dalam repo, pilih **Add file → Upload files**.
4. Seret **kandungan folder github-pages** ke ruang muat naik: **index.html**, **assets**, **README.md** dan **.nojekyll**. index.html mesti berada pada aras paling atas repo, bersama folder assets.
5. Lengkapkan commit ke branch **main**. Jika GitHub memaparkan pilihan pull request, selesaikan dan merge ke main.

Folder **apps-script** digunakan di Google Apps Script. Fail ZIP dan folder luar pakej tidak perlu menjadi folder induk laman dalam repo.

**Muat naik folder assets bersama index.html** supaya lagu dan fon yang sama tersedia. Fail lagu ialah `assets/media/lagu-pengiring.mp3`. Semua pautan aset menggunakan laluan relatif supaya berfungsi dalam repo ini.

Jika .nojekyll tidak kelihatan semasa muat naik, pilih **Add file → Create new file**, namakan `.nojekyll`, biarkan kandungan kosong dan commit.

## 4. Aktifkan GitHub Pages

1. Dalam repo, pilih **Settings → Pages**.
2. Di **Build and deployment**, tetapkan **Source: Deploy from a branch**.
3. Pilih **Branch: main** dan **Folder: /(root)**, kemudian tekan **Save**.
4. Tunggu deployment selesai. Pautan sebenar akan muncul di halaman Pages; pilih **Visit site**.

Contoh pautan:

```text
https://USERNAME.github.io/rsvp-alyn-syarifuddin/
```

Penerbitan boleh mengambil beberapa minit. Tab **Actions** menunjukkan status deployment. Setiap perubahan yang di-commit ke main akan menerbitkan versi laman baharu.

## 5. Semak selepas diterbitkan

- Buka pautan GitHub Pages di komputer dan telefon.
- Semak lagu, bunga, nama pengantin, Google Maps dan tab Waze.
- Hantar satu RSVP percubaan **Hadir**, pilih bilangan tetamu dan isi ucapan. Semak rekodnya dalam tab **RSVP** serta paparan ucapan pada laman.
- Cuba **Tidak hadir**; pilihan jumlah disembunyikan dan nilai dalam Sheets ialah 0.
- Jika tidak mahu menyimpan rekod percubaan, padam baris percubaan itu daripada Sheets.

Status berjaya hanya ditunjukkan selepas backend mengesahkan penulisan Sheets. Jika pengesahan tergendala, menghantar semula kiriman yang sama menggunakan ID kiriman yang sama untuk mengelakkan rekod berganda.

## Perkara yang dikekalkan

Nama Alyn menggunakan A besar, tema biru cair, font Pinyon Script, bunga lebih pekat dan bergerak pada telefon, halaman bermula pada muka hadapan, kehadiran 1–5 orang termasuk tetamu sendiri, ucapan bersama nama/tarikh, lagu asal dan kawalan muzik, pautan kalendar, Google Maps serta Waze. Dua ayat bantuan yang anda minta buang juga kekal dibuang.

Kod masih mencuba autoplay dan mencuba semula selepas sentuhan biasa. Chrome/Safari boleh menyekat audio sebelum interaksi pengguna; pemindahan hosting tidak boleh menjamin bunyi tanpa sentuhan dalam semua pelayar.

CSS, HTML paparan dan aset telah disemak; aliran RSVP diuji dengan backend simulasi. Laman GitHub dan kod dalam akaun Google anda belum diterbitkan oleh saya, dan semakan pada telefon sebenar belum dilakukan.

## Jika ada masalah

| Keadaan | Semakan |
| --- | --- |
| Laman 404 | Pastikan index.html berada di root branch main dan Pages memilih /(root). Semak Actions. |
| Lagu atau fon tiada | Semak folder assets turut dimuat naik pada aras yang sama dengan index.html. |
| Borang belum tersedia | Semak Code.gs baharu sudah di-deploy sebagai New version, akses Anyone, dan SCRIPT_URL berakhir dengan /exec. |
| RSVP mengambil masa | Semak deployment Google dan cuba kiriman yang sama lagi; jangan ubah maklumat ketika menunggu pengesahan. |
| Illegal spreadsheet id | Isi hanya ID spreadsheet pada SPREADSHEET_ID, bukannya URL penuh. ID telah diisi dalam fail ini. |

## Rujukan rasmi

- GitHub: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- Tetapan Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- Muat naik fail: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- Apps Script Web Apps: https://developers.google.com/apps-script/guides/web
- Apps Script Content Service: https://developers.google.com/apps-script/guides/content
