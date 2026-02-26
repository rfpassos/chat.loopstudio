
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Erro: Variáveis de ambiente NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY não encontradas.');
    console.log('Verifique se o arquivo .env.local existe e contém as chaves.');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
    console.log('🔄 Testando conexão com Supabase...');

    try {
        // 1. Teste de Tabela (DB)
        const { data, error } = await supabase.from('ls_projects').select('count', { count: 'exact', head: true });

        if (error) {
            if (error.code === '42P01') {
                console.log('✅ Conexão DB estabelecida!');
                console.warn('⚠️  Aviso: As tabelas ainda não foram criadas. Execute script SQL.');
            } else {
                console.error('❌ Falha na conexão DB:', error.message);
            }
        } else {
            console.log('✅ Conexão DB estabelecida com sucesso!');
            console.log('✅ Tabela ls_projects encontrada.');
        }

        // 2. Teste de Storage (Buckets)
        console.log('\n🔄 Testando conexão com Storage...');
        const { data: buckets, error: storageError } = await supabase.storage.listBuckets();

        if (storageError) {
            console.error('❌ Falha no Storage:', storageError.message);
            console.warn('⚠️  Possível ausência do serviço de Storage ou falta de permissões.');
        } else {
            console.log('✅ Conexão Storage estabelecida!');

            if (buckets && buckets.length > 0) {
                console.log('📦 Buckets encontrados:', buckets.map(b => b.name).join(', '));
                const projectBucket = buckets.find(b => b.name === 'video-editor-assets');
                if (projectBucket) {
                    console.log('✅ Bucket "video-editor-assets" confirmado.');
                } else {
                    console.warn('⚠️  Bucket "video-editor-assets" NÃO encontrado.');
                }
            } else {
                console.log('📦 Nenhum bucket público listado.');
            }
        }

    } catch (err: any) {
        console.error('❌ Erro inesperado:', err.message);
    }
}

testConnection();
