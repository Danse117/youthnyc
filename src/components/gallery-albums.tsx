import { galleryAlbums } from "@/data/content";

export function GalleryAlbums() {
  return (
    <section aria-labelledby="community-albums-heading" className="mt-20">
      <div className="mb-8">
        <h2 id="community-albums-heading" className="font-heading text-3xl font-bold text-foreground">
          More Community Memories
        </h2>
        <p className="mt-3 text-muted-foreground">
          Explore our shared albums for more photos and videos.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        {galleryAlbums.map((album) => (
          <article key={album.id} className="min-w-0 overflow-hidden rounded-2xl border border-border bg-card">
            <div className="p-6">
              <h3 className="font-heading text-xl font-semibold">{album.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{album.description}</p>
            </div>
            <iframe
              src={`https://drive.google.com/embeddedfolderview?id=${album.id}#grid`}
              title={`${album.title} — Google Drive album`}
              loading="lazy"
              className="h-[480px] w-full border-0 bg-white"
            />
            <div className="border-t border-border p-6">
              <a
                href={`https://drive.google.com/drive/folders/${album.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-primary underline underline-offset-4"
              >
                Open {album.title} in Google Drive
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
