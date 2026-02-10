// Simula o processamento e geração de um clipe de vídeo
export async function generateClip(
  momentId: string,
  timestamp: string,
  duration: number,
  reactionType: string
): Promise<void> {
  // Simula delay de processamento (1-3 segundos)
  const processingTime = 1000 + Math.random() * 2000;
  await new Promise(resolve => setTimeout(resolve, processingTime));

  // Em produção, aqui seria feita a chamada para API de processamento de vídeo
  // Por exemplo: FFmpeg, Cloudflare Stream, AWS MediaConvert, etc.
  
  // Por enquanto, vamos criar um blob mockado para simular o download
  const mockVideoContent = createMockVideoBlob(momentId, timestamp, duration, reactionType);
  
  // Trigger download
  downloadBlob(mockVideoContent, `clip_${timestamp.replace(/:/g, '-')}_${reactionType}.mp4`);
}

// Cria um blob mockado que simula um arquivo de vídeo
function createMockVideoBlob(
  momentId: string,
  timestamp: string,
  duration: number,
  reactionType: string
): Blob {
  // Cria um arquivo de texto com metadados como simulação
  // Em produção, isso seria um arquivo MP4 real
  const metadata = {
    type: 'ChaosCut Clip',
    momentId,
    timestamp,
    duration: `${duration}s`,
    reactionType,
    format: 'MP4',
    resolution: '1080x1920',
    fps: 30,
    codec: 'H.264',
    generatedAt: new Date().toISOString(),
    note: 'Este é um clipe mockado. Em produção, seria um vídeo MP4 real cortado da live original.',
  };

  const content = JSON.stringify(metadata, null, 2);
  return new Blob([content], { type: 'application/octet-stream' });
}

// Faz o download do blob
function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Formata segundos para duração legível
export function formatDuration(seconds: number): string {
  if (seconds < 60) {
    return `${seconds}s`;
  }
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return remainingSeconds > 0 ? `${minutes}m ${remainingSeconds}s` : `${minutes}m`;
}
