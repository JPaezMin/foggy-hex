<template>
    <section id="newsletter" class="newsletter-section">
        <div
            class="border border-text newsletter-panel"
        >
            <div class="newsletter-grid">
                <div class="text-left">
                    <h2 class="font-heading text-3xl mb-4">
                        Suscríbete a nuestra newsletter.
                    </h2>
                    <p class="text-lg text-gray-700 max-w-md">
                        Únete a nuestra lista de correo para enterarte
                        primero de los próximos conciertos, novedades y
                        noticias de Foggy Hex.
                    </p>
                </div>

                <div class="w-full">
                    <form
                        action="https://foggyhexbcn.us13.list-manage.com/subscribe/post?u=3bf61944f37a5e219e4fdccda&amp;id=c32ef2e9a5&amp;f_id=001b02e9f0"
                        method="post"
                        target="_blank"
                        class="newsletter-form"
                    >
                        <label for="newsletter-email" class="sr-only">Tu correo electrónico</label>
                        <input
                            id="newsletter-email"
                            type="email"
                            name="EMAIL"
                            autocomplete="email"
                            placeholder="Tu correo electrónico"
                            required
                            class="min-w-0 flex-auto px-4 py-3 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                        >
                        <button
                            type="submit"
                            class="bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition"
                        >
                            Suscribirse
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.newsletter-panel {
    padding: var(--fh-space-3);
}

.newsletter-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 23rem), 1fr));
    gap: var(--fh-space-2);
    align-items: center;
}

.newsletter-form {
    display: flex;
    flex-wrap: wrap;
    gap: var(--fh-space-1);
}
</style>
