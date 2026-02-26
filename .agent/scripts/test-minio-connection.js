
const Minio = require('minio');
require('dotenv').config({ path: '.env.local' });

const minioClient = new Minio.Client({
    endPoint: process.env.MINIO_ENDPOINT || 'localhost',
    port: parseInt(process.env.MINIO_PORT || '9000'),
    useSSL: process.env.MINIO_USE_SSL === 'true',
    accessKey: process.env.MINIO_ACCESS_KEY,
    secretKey: process.env.MINIO_SECRET_KEY
});

async function testMinio() {
    console.log('🔄 Testando conexão com MinIO...');
    console.log(`📡 Endpoint: ${process.env.MINIO_ENDPOINT}:${process.env.MINIO_PORT}`);

    try {
        const buckets = await minioClient.listBuckets();
        console.log('✅ Conexão MinIO estabelecida!');

        if (buckets && buckets.length > 0) {
            console.log('📦 Buckets encontrados:', buckets.map(b => b.name).join(', '));
            const projectBucket = buckets.find(b => b.name === 'video-editor-assets');
            if (projectBucket) {
                console.log('✅ Bucket "video-editor-assets" encontrado.');
            } else {
                console.warn('⚠️  Bucket "video-editor-assets" NÃO encontrado.');
                console.log('🛠️  Tentando criar bucket...');
                await minioClient.makeBucket('video-editor-assets', 'us-east-1');
                console.log('✅ Bucket "video-editor-assets" criado com sucesso!');

                // Define política pública (opcional, cuidado em prod)
                const policy = {
                    Version: '2012-10-17',
                    Statement: [
                        {
                            Effect: 'Allow',
                            Principal: { AWS: ['*'] },
                            Action: ['s3:GetBucketLocation', 's3:ListBucket', 's3:ListBucketMultipartUploads'],
                            Resource: [`arn:aws:s3:::video-editor-assets`],
                        },
                        {
                            Effect: 'Allow',
                            Principal: { AWS: ['*'] },
                            Action: ['s3:GetObject', 's3:PutObject', 's3:DeleteObject', 's3:AbortMultipartUpload'],
                            Resource: [`arn:aws:s3:::video-editor-assets/*`],
                        },
                    ],
                };
                await minioClient.setBucketPolicy('video-editor-assets', JSON.stringify(policy));
                console.log('🔓 Política pública aplicada ao bucket.');
            }
        } else {
            console.log('📦 Nenhum bucket encontrado.');
        }

    } catch (err) {
        console.error('❌ Erro no MinIO:', err.message);
        if (err.code === 'ECONNREFUSED') {
            console.error('Certifique-se de que o MinIO Server está rodando (Docker?).');
        }
    }
}

testMinio();
