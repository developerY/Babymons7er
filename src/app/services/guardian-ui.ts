import { Injectable, signal } from '@angular/core';
import { Guardian, GuardianId, getGuardianById } from '../data/guardians.data';

export interface ToastMessage {
  title: string;
  description: string;
}

export interface DispatchSession {
  id: string;
  mode: 'individual' | 'swarm';
  guardians: string[];
  enclave: string;
  directive: string;
  operator: string;
  timestamp: string;
  signature: string;
  latencyMs: string;
}

@Injectable({ providedIn: 'root' })
export class GuardianUiState {
  readonly activeDossier = signal<Guardian | null>(null);
  readonly toast = signal<ToastMessage | null>(null);
  readonly sessions = signal<DispatchSession[]>([
    {
      id: 'SD-7041',
      mode: 'swarm',
      guardians: ['All 7 Guardians'],
      enclave: 'Abyssal Station Ivory',
      directive: 'Continuous zero-entropy verification across planetary hydrographic cluster',
      operator: 'System Registry',
      timestamp: 'Active Baseline',
      signature: '0x9f4a…c7e1',
      latencyMs: '14.2 ms',
    },
  ]);

  private toastTimer: ReturnType<typeof setTimeout> | null = null;

  openDossier(id: GuardianId): void {
    this.activeDossier.set(getGuardianById(id));
  }

  closeDossier(): void {
    this.activeDossier.set(null);
  }

  showToast(title: string, description: string, durationMs = 3800): void {
    if (this.toastTimer) {
      clearTimeout(this.toastTimer);
    }
    this.toast.set({ title, description });
    this.toastTimer = setTimeout(() => {
      this.toast.set(null);
      this.toastTimer = null;
    }, durationMs);
  }

  dismissToast(): void {
    if (this.toastTimer) {
      clearTimeout(this.toastTimer);
      this.toastTimer = null;
    }
    this.toast.set(null);
  }

  deploySingleNode(guardian: Guardian): void {
    const id = `SD-${Math.floor(7100 + Math.random() * 899)}`;
    const hash = this.generateAttestationHash(`${guardian.id}-${Date.now()}`);
    this.sessions.update((list) => [
      {
        id,
        mode: 'individual',
        guardians: [`${guardian.name} (Node ${guardian.nodeNumber})`],
        enclave: guardian.subRealmLabel,
        directive: `Dedicated specialist thread allocated for ${guardian.idealShort.toLowerCase()}`,
        operator: 'Terminal Dispatch',
        timestamp: 'Just now',
        signature: hash,
        latencyMs: guardian.latencySla.replace('< ', ''),
      },
      ...list,
    ]);
    this.showToast(
      `Core ${guardian.nodeNumber} Active · ${guardian.name}`,
      `Dedicated thread locked. ${guardian.name} is allocated to your session.`
    );
  }

  deployFullSwarm(
    directive = 'Full septet synchronous consensus engaged across all 7 nodes',
    operator = 'Terminal Dispatch',
    enclave = 'Abyssal Station Ivory'
  ): DispatchSession {
    const id = `SW-${Math.floor(7100 + Math.random() * 899)}`;
    const session: DispatchSession = {
      id,
      mode: 'swarm',
      guardians: ['All 7 Guardians'],
      enclave,
      directive,
      operator,
      timestamp: 'Just now',
      signature: this.generateAttestationHash(`swarm-${Date.now()}`),
      latencyMs: '14.8 ms',
    };
    this.sessions.update((list) => [session, ...list]);
    this.showToast(
      'Swarm Consensus Engaged · 7 Cores Active',
      'Equilibrium established across Grace, Cadence, Serenity, Guidance, Hope, Faith, and Love.',
      4400
    );
    return session;
  }

  recordCustomDispatch(params: {
    mode: 'individual' | 'swarm';
    guardian?: Guardian;
    enclave: string;
    directive: string;
    operator: string;
  }): DispatchSession {
    if (params.mode === 'swarm' || !params.guardian) {
      return this.deployFullSwarm(params.directive, params.operator, params.enclave);
    }
    const g = params.guardian;
    const id = `SD-${Math.floor(7100 + Math.random() * 899)}`;
    const session: DispatchSession = {
      id,
      mode: 'individual',
      guardians: [`${g.name} (Node ${g.nodeNumber})`],
      enclave: params.enclave,
      directive: params.directive,
      operator: params.operator,
      timestamp: 'Just now',
      signature: this.generateAttestationHash(`${g.id}-${params.directive}`),
      latencyMs: g.latencySla.replace('< ', ''),
    };
    this.sessions.update((list) => [session, ...list]);
    this.showToast(
      `Dispatch Confirmed · ${g.name}`,
      `Node ${g.nodeNumber} assigned to ${params.enclave} (${session.id}).`,
      4200
    );
    return session;
  }

  private generateAttestationHash(seed: string): string {
    let h = 2166136261;
    for (let i = 0; i < seed.length; i++) {
      h ^= seed.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    const hex = (h >>> 0).toString(16).padStart(8, '0');
    return `0x${hex.slice(0, 4)}…${hex.slice(4)}`;
  }
}
