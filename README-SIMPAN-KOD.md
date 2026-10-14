# Semua kod RSVP — Alyn & Syarifuddin

Salinan lengkap kod jemputan untuk **12 Disember 2026** di **Asiana Grand Hall Cheras**. Pakej ini menggunakan sumber laman **versi 6**, termasuk pembetulan bunga yang terus jatuh pada telefon ketika Reduce Motion aktif.

## Kandungan pakej

| Fail atau folder | Kandungan |
| --- | --- |
| `Apps-Script/Index.html` | HTML penuh bersama CSS dan JavaScript. |
| `Apps-Script/Kod-Penuh-HTML.txt` | Kod yang sama dalam fail teks, mudah dibuka melalui Notepad. |
| `Apps-Script/Code.gs` | Backend Google Sheets; fungsi setup, doGet, rsvpApi, simpan RSVP dan senarai ucapan. |
| `Apps-Script/Panduan-HTML.md` | Langkah memasang dua fail dalam Google Apps Script dan mendapatkan URL /exec. |
| `Sites-Source/` | Semua fail sumber projek asal React/Vinext, termasuk borang, API, CSS, konfigurasi dan senarai dependencies. |
| `Aset/` | Lagu MP3, font bersama lesen, favicon, kod halaman pembukaan dan fail kalendar. |
| `SHA256SUMS.txt` | Hash fail untuk menyemak salinan simpanan jika diperlukan. |

## Cara simpan dan lihat kod

1. Muat turun ZIP dan pilih **Extract All / Ekstrak Semua**.
2. Simpan folder yang diekstrak pada komputer atau Google Drive anda.
3. Buka **Apps-Script/Kod-Penuh-HTML.txt** dalam Notepad atau VS Code untuk melihat dan menyalin keseluruhan HTML.
4. Buka **Apps-Script/Code.gs** dalam editor teks untuk melihat kod backend.

## Cara menggunakan versi Apps Script

Dalam projek Google Apps Script, ganti kandungan **Code.gs** dengan fail dalam folder Apps-Script. Tambah fail HTML bernama **Index**, kemudian tampal keseluruhan HTML daripada **Index.html** atau **Kod-Penuh-HTML.txt**. Jalankan `setup()` sekali dan pilih **Deploy → Manage deployments → Edit → New version → Deploy**.

Gunakan tetapan **Execute as: Me** dan **Who has access: Anyone**. Panduan penuh disertakan dalam **Apps-Script/Panduan-HTML.md**. ID spreadsheet sudah diisi dalam Code.gs.

HTML yang dibuka terus daripada komputer hanya memaparkan pratonton; borang memerlukan laman yang dihoskan melalui Apps Script untuk menyimpan RSVP ke Google Sheets.

## Mengenai kod asal Sites

Kod utama laman berada dalam **Sites-Source/app/wedding-page.tsx** dan **Sites-Source/app/globals.css**. Sambungan Google Sheets berada dalam **Sites-Source/app/lib/rsvp.ts**, **app/api/rsvp/route.ts** dan **app/api/wishes/route.ts**.

Fail **Sites-Source/SETTINGS.example.txt** menyenaraikan tetapan backend yang perlu diisi semula jika projek dipulihkan pada hosting lain. Salinan ini tidak mengandungi token akses hosting atau repository.

Projek asal memerlukan Node.js **22.13.0 atau lebih baharu** dan dependencies dalam package.json/pnpm-lock.yaml. Untuk menjalankan projek pada komputer yang telah menyediakan Node.js dan pnpm:

```sh
pnpm install --frozen-lockfile
pnpm run dev
```

Untuk build:

```sh
pnpm run build
```

Arahan asal projek turut disertakan dalam **Sites-Source/README.md**. Pakej menyimpan semua kod sumber; dependencies akan dipasang daripada senarai package ketika projek dijalankan semula.

## Lagu, font dan peta

HTML sekarang memuatkan font daripada Google Fonts dan lagu daripada laman Sites anda. Salinan lagu dan font ada dalam **Aset/** dan **Sites-Source/public/**. Jika hosting lama dihentikan, anda boleh menghoskan salinan aset pada hosting HTTPS lain dan mengemas kini URL dalam HTML. Menyalin aset ke Google Drive sahaja tidak menjadikannya URL audio/font yang boleh terus distrim oleh HTML.

Google Maps dan Waze memerlukan internet. Lagu cuba dimainkan secara automatik; sekatan audio Chrome/Safari sebelum interaksi pengguna masih terpakai.

## Maklumat salinan

Sumber Sites: versi **6**.

Commit sumber: **a07137a52d75d55c89004c574c1939995e12c716**.

Laman semasa: https://invitation-alyn-syarifuddin.richcrane2.chatgpt.site

Tarikh salinan: **15 Oktober 2026**, waktu Malaysia.
