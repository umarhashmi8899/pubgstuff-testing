// Mock Supabase client for development
export const supabase = {
  from: (table: string) => ({
    select: (columns: string) => ({
      order: (column: string, options?: any) => ({
        then: (callback: any) => callback({ data: [], error: null })
      }),
      eq: (column: string, value: any) => ({
        then: (callback: any) => callback({ data: [], error: null })
      }),
      in: (column: string, values: any[]) => ({
        then: (callback: any) => callback({ data: [], error: null })
      })
    }),
    insert: (data: any) => ({
      then: (callback: any) => callback({ data: null, error: null })
    }),
    update: (data: any) => ({
      eq: (column: string, value: any) => ({
        then: (callback: any) => callback({ data: null, error: null })
      })
    }),
    delete: () => ({
      eq: (column: string, value: any) => ({
        then: (callback: any) => callback({ data: null, error: null })
      })
    })
  }),
  auth: {
    signOut: () => Promise.resolve({ error: null }),
    updateUser: (data: any) => Promise.resolve({ error: null })
  },
  channel: (name: string) => ({
    on: (event: string, config: any, callback: any) => ({ subscribe: () => {} }),
    subscribe: () => {}
  }),
  removeChannel: (channel: any) => {}
}