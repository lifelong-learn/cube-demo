cube(`Testing`, {
  sql: `SELECT * FROM public.testing`,
  
  joins: {
    
  },
  
  measures: {
    value: {
      sql: `value`,
      type: `sum`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primaryKey: true
    },
    
    subSeriesName: {
      sql: `sub_series_name`,
      type: `string`
    },
    
    parameter: {
      sql: `parameter`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
